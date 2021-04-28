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

    var data = {"OkPercent": 27.833333333333332, "KoPercent": 72.16666666666667};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.030833333333333334, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0875, 500, 1500, "Get All Users"], "isController": false}, {"data": [0.0825, 500, 1500, "Get All Organisations"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Groups"], "isController": false}, {"data": [0.015, 500, 1500, "Get All Projects"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Opportunities"], "isController": false}, {"data": [0.0, 500, 1500, "Get All Challenges"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1200, 866, 72.16666666666667, 65668.90083333333, 127, 262238, 59963.0, 92039.7, 261989.75, 262144.99, 2.1525513114418864, 24.225721267251803, 0.20352540817754244], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Get All Users", 200, 79, 39.5, 33189.74500000002, 230, 60299, 19455.0, 60251.9, 60272.8, 60297.94, 0.5834509959508501, 32.86475191116667, 0.1247468369662882], "isController": false}, {"data": ["Get All Organisations", 200, 76, 38.0, 34210.450000000004, 239, 60038, 36191.0, 59718.9, 59743.85, 60016.67, 0.6277641239080828, 0.9977403434183639, 0.13075149643273037], "isController": false}, {"data": ["Get All Groups", 200, 190, 95.0, 137686.46999999997, 32791, 262238, 64917.0, 262123.7, 262149.85, 262183.99, 0.7626339852582851, 2.949378947822489, 0.014075959298224205], "isController": false}, {"data": ["Get All Projects", 200, 156, 78.0, 50823.375000000015, 127, 60269, 59979.0, 60240.9, 60250.0, 60267.98, 0.5138020063968349, 0.8716068997186934, 0.034109629291852385], "isController": false}, {"data": ["Get All Opportunities", 200, 197, 98.5, 59715.535, 52600, 60211, 59748.5, 59987.9, 59993.0, 60156.47, 0.51250249844968, 1.0697813992663525, 0.002672620450899698], "isController": false}, {"data": ["Get All Challenges", 200, 168, 84.0, 78387.83, 24851, 167636, 60221.0, 125970.6, 149732.34999999971, 161877.69, 0.5039509756490889, 0.9866612050979682, 0.027796046000645058], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 789, 91.10854503464203, 65.75], "isController": false}, {"data": ["502/Bad Gateway", 2, 0.23094688221709006, 0.16666666666666666], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to test.cherrytwist.org:443 [test.cherrytwist.org/3.9.193.78, test.cherrytwist.org/18.168.29.153] failed: Connection timed out (Connection timed out)", 75, 8.660508083140877, 6.25], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1200, 866, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 789, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to test.cherrytwist.org:443 [test.cherrytwist.org/3.9.193.78, test.cherrytwist.org/18.168.29.153] failed: Connection timed out (Connection timed out)", 75, "502/Bad Gateway", 2, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Get All Users", 200, 79, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 77, "502/Bad Gateway", 2, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Organisations", 200, 76, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 76, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Groups", 200, 190, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 115, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to test.cherrytwist.org:443 [test.cherrytwist.org/3.9.193.78, test.cherrytwist.org/18.168.29.153] failed: Connection timed out (Connection timed out)", 75, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Projects", 200, 156, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 156, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Opportunities", 200, 197, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 197, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get All Challenges", 200, 168, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: test.cherrytwist.org:443 failed to respond", 168, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
