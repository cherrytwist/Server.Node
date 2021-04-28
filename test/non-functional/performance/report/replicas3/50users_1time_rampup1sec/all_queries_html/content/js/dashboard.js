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

    var data = {"OkPercent": 64.33333333333333, "KoPercent": 35.666666666666664};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.15166666666666667, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.33, 500, 1500, "Get All Users"], "isController": false}, {"data": [0.34, 500, 1500, "Get All Organisations"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Groups"], "isController": false}, {"data": [0.24, 500, 1500, "Get All Projects"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Opportunities"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Challenges"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 300, 107, 35.666666666666664, 30220.760000000013, 72, 62023, 25129.5, 60240.600000000006, 61982.9, 61999.99, 1.2296341838303104, 23.082879425402194, 0.2748344476893124], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Get All Users", 50, 1, 2.0, 7169.580000000002, 72, 51268, 2953.5, 21357.5, 34172.44999999998, 51268.0, 0.314307266784008, 28.280729428589385, 0.10927088571787778], "isController": false}, {"data": ["Get All Organisations", 50, 2, 4.0, 10731.880000000003, 275, 59064, 5467.0, 34981.0, 40044.75, 59064.0, 0.32247662044501774, 0.42268371089970974, 0.10616534988713318], "isController": false}, {"data": ["Get All Groups", 50, 28, 56.0, 52129.87999999999, 18072, 62023, 61798.5, 61998.9, 62000.0, 62023.0, 0.8060745780199584, 12.52484032166406, 0.13092414435183541], "isController": false}, {"data": ["Get All Projects", 50, 9, 18.0, 24845.600000000006, 201, 59976, 23775.5, 59585.7, 59797.05, 59976.0, 0.3230287172529638, 0.23107278846464452, 0.08382973761992442], "isController": false}, {"data": ["Get All Opportunities", 50, 34, 68.0, 43464.39999999999, 2506, 60247, 59239.5, 59990.8, 60095.55, 60247.0, 0.3584280778219042, 1.1785143200977792, 0.03987512365768685], "isController": false}, {"data": ["Get All Challenges", 50, 33, 66.0, 42983.22, 117, 60023, 59729.5, 59983.9, 59992.15, 60023.0, 0.48108841442880373, 0.8673028108793335, 0.06302070303855442], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 101, 94.39252336448598, 33.666666666666664], "isController": false}, {"data": ["502/Bad Gateway", 6, 5.607476635514018, 2.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 300, 107, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 101, "502/Bad Gateway", 6, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Get All Users", 50, 1, "502/Bad Gateway", 1, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Organisations", 50, 2, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 1, "502/Bad Gateway", 1, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Groups", 50, 28, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 28, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Projects", 50, 9, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 7, "502/Bad Gateway", 2, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Opportunities", 50, 34, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 34, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Challenges", 50, 33, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 31, "502/Bad Gateway", 2, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
