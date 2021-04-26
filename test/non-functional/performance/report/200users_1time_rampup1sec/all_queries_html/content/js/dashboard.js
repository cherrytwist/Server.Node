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

    var data = {"OkPercent": 10.916666666666666, "KoPercent": 89.08333333333333};
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1200, 1069, 89.08333333333333, 16871.85583333332, 50, 76839, 412.5, 59991.9, 75714.95, 76754.0, 3.999746682710095, 22.194912681571832, 1.0715890337361966], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Get All Users", 200, 136, 68.0, 4659.329999999999, 53, 60001, 372.0, 15538.6, 16081.4, 54416.440000000344, 0.7506183218426179, 22.128330751519062, 0.2596523651983321], "isController": false}, {"data": ["Get All Organisations", 200, 135, 67.5, 9165.680000000004, 50, 30351, 393.0, 29677.9, 29938.55, 30300.43, 0.6824215044664488, 0.35445599383602777, 0.22925097415669762], "isController": false}, {"data": ["Get All Groups", 200, 198, 99.0, 28759.19999999999, 4076, 76839, 6566.5, 76734.9, 76769.95, 76821.86, 2.6022691787238474, 2.7476557214140733, 0.6580132406708651], "isController": false}, {"data": ["Get All Projects", 200, 200, 100.0, 19642.594999999998, 52, 60028, 255.0, 60002.0, 60014.95, 60023.96, 0.8004386403749255, 0.5999381411013235, 0.1630385638830079], "isController": false}, {"data": ["Get All Opportunities", 200, 200, 100.0, 19562.835000000006, 50, 59973, 274.0, 59746.9, 59751.9, 59827.48, 1.0511599550103539, 0.7878567045609831, 0.24667357147362115], "isController": false}, {"data": ["Get All Challenges", 200, 200, 100.0, 19441.495000000003, 56, 60015, 338.0, 59974.9, 59982.0, 60009.83, 1.5074884488697606, 1.1156003384311568, 0.3533764914713841], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 258, 24.13470533208606, 21.5], "isController": false}, {"data": ["502/Bad Gateway", 811, 75.86529466791394, 67.58333333333333], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1200, 1069, "502/Bad Gateway", 811, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 258, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Get All Users", 200, 136, "502/Bad Gateway", 135, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 1, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Organisations", 200, 135, "502/Bad Gateway", 135, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Groups", 200, 198, "502/Bad Gateway", 135, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 63, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Projects", 200, 200, "502/Bad Gateway", 135, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 65, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Opportunities", 200, 200, "502/Bad Gateway", 135, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 65, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Challenges", 200, 200, "502/Bad Gateway", 136, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 64, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
