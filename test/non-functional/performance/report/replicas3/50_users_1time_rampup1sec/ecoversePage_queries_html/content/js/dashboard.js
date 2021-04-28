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

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.497, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.25, 500, 1500, "ecoverseHostReferences"], "isController": false}, {"data": [0.01, 500, 1500, "allOpportunities"], "isController": false}, {"data": [0.38, 500, 1500, "projects"], "isController": false}, {"data": [0.45, 500, 1500, "ecoverseInfo"], "isController": false}, {"data": [0.94, 500, 1500, "serverMetadata"], "isController": false}, {"data": [0.76, 500, 1500, "ecoverseUserIds"], "isController": false}, {"data": [0.59, 500, 1500, "userAvatars"], "isController": false}, {"data": [0.92, 500, 1500, "me"], "isController": false}, {"data": [0.0, 500, 1500, "challenges "], "isController": false}, {"data": [0.67, 500, 1500, "userDetails"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 500, 0, 0.0, 3216.754000000001, 52, 25341, 1041.0, 6962.3, 18141.349999999995, 25039.980000000003, 13.331911262798636, 26.984361251466513, 5.372968550021332], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["ecoverseHostReferences", 50, 0, 0.0, 1636.4399999999998, 85, 2720, 1932.5, 2631.7, 2704.05, 2720.0, 8.952551477170994, 5.009582027752909, 3.2697795434198746], "isController": false}, {"data": ["allOpportunities", 50, 0, 0.0, 17098.179999999997, 1380, 25341, 17955.5, 25012.8, 25322.95, 25341.0, 1.692734782314307, 3.9359389811429346, 0.5802245201096892], "isController": false}, {"data": ["projects", 50, 0, 0.0, 1862.0, 79, 4476, 2282.5, 3756.1, 4277.699999999999, 4476.0, 5.930494603249911, 3.1332007620685567, 2.1602289912228683], "isController": false}, {"data": ["ecoverseInfo", 50, 0, 0.0, 2329.1199999999994, 115, 7715, 1197.0, 6704.799999999998, 6985.7, 7715.0, 1.7467859139183903, 2.325067578780045, 0.7079259319102851], "isController": false}, {"data": ["serverMetadata", 50, 0, 0.0, 234.97999999999993, 52, 1035, 127.0, 548.0999999999999, 805.4999999999999, 1035.0, 1.7808804673030347, 0.9930495574512038, 0.5930471087405613], "isController": false}, {"data": ["ecoverseUserIds", 50, 0, 0.0, 719.8199999999999, 113, 3768, 231.0, 2566.8999999999996, 2902.6999999999994, 3768.0, 2.0117486118934576, 13.860240680574556, 0.6306360394705078], "isController": false}, {"data": ["userAvatars", 50, 0, 0.0, 941.2399999999999, 111, 2112, 1058.0, 1710.2, 1782.4999999999998, 2112.0, 8.220979940808945, 5.388595445577113, 2.793366953715883], "isController": false}, {"data": ["me", 50, 0, 0.0, 273.9800000000001, 56, 1256, 104.0, 593.5999999999999, 1185.0499999999995, 1256.0, 1.7773985994099035, 2.2634407437524438, 1.0449159734812128], "isController": false}, {"data": ["challenges ", 50, 0, 0.0, 5901.56, 4345, 8327, 5689.5, 7273.0, 7777.399999999998, 8327.0, 5.998080614203455, 28.988770468450095, 2.2668527321257197], "isController": false}, {"data": ["userDetails", 50, 0, 0.0, 1170.22, 71, 5487, 131.5, 3773.9, 4797.599999999997, 5487.0, 1.9921112394916132, 2.5640261439698793, 1.1963172711064185], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 500, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
