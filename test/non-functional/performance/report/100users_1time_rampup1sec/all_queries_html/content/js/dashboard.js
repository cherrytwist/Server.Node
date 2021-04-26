/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 1.1666666666666667, "KoPercent": 98.83333333333333};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "Get All Users"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Organisations"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Groups"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Projects"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Opportunities"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Challenges"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 600, 593, 98.83333333333333, 60203.85666666666, 22484, 64336, 59981.0, 63277.0, 64262.9, 64296.0, 1.64709822470263, 3.9295436791576193, 0.0070934601278697254], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Get All Users", 100, 100, 100.0, 59930.63, 59249, 60142, 59978.5, 60004.9, 60019.8, 60141.73, 0.9761049508043105, 1.9798534988481964, 0.0], "isController": false}, {"data": ["Get All Organisations", 100, 100, 100.0, 59975.619999999995, 59741, 60028, 59993.5, 60014.0, 60017.0, 60027.92, 0.9705439899063425, 1.9685740889018295, 0.0], "isController": false}, {"data": ["Get All Groups", 100, 93, 93.0, 61676.65000000002, 22484, 64336, 64228.0, 64290.7, 64296.95, 64335.7, 1.5540981568395862, 6.484975391826997, 0.04015765354489789], "isController": false}, {"data": ["Get All Projects", 100, 100, 100.0, 59971.88, 59239, 60332, 60206.5, 60281.2, 60293.95, 60331.87, 0.9791729904922303, 1.98607646606676, 0.0], "isController": false}, {"data": ["Get All Opportunities", 100, 100, 100.0, 59753.28, 59660, 60005, 59728.5, 59817.8, 59993.3, 60004.9, 0.9818071141743494, 1.9914193126368396, 0.0], "isController": false}, {"data": ["Get All Challenges", 100, 100, 100.0, 59915.07999999999, 59128, 60036, 59961.5, 59992.0, 60014.75, 60035.95, 0.982260377580889, 1.9923386760112372, 0.0], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 593, 100.0, 98.83333333333333], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 600, 593, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 593, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Get All Users", 100, 100, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 100, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Organisations", 100, 100, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 100, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Groups", 100, 93, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 93, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Projects", 100, 100, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 100, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Opportunities", 100, 100, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 100, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Challenges", 100, 100, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 100, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
