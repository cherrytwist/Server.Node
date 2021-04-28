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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.402, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.315, 500, 1500, "ecoverseHostReferences"], "isController": false}, {"data": [0.01, 500, 1500, "allOpportunities"], "isController": false}, {"data": [0.255, 500, 1500, "projects"], "isController": false}, {"data": [0.365, 500, 1500, "ecoverseInfo"], "isController": false}, {"data": [0.95, 500, 1500, "serverMetadata"], "isController": false}, {"data": [0.59, 500, 1500, "ecoverseUserIds"], "isController": false}, {"data": [0.22, 500, 1500, "userAvatars"], "isController": false}, {"data": [0.8, 500, 1500, "me"], "isController": false}, {"data": [0.0, 500, 1500, "challenges "], "isController": false}, {"data": [0.515, 500, 1500, "userDetails"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1000, 0, 0.0, 5761.532000000002, 52, 44762, 2163.0, 11940.8, 34751.34999999999, 44329.57, 14.813936951884333, 30.032103421649087, 5.970537394080351], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["ecoverseHostReferences", 100, 0, 0.0, 4143.61, 75, 8300, 4694.5, 7941.400000000001, 8103.9, 8298.41, 8.29737802854298, 4.642966416362429, 3.030487678393628], "isController": false}, {"data": ["allOpportunities", 100, 0, 0.0, 30187.62000000001, 972, 44762, 34700.5, 44325.7, 44463.75, 44761.94, 1.7180064253440308, 3.9947004870548217, 0.5888869680622606], "isController": false}, {"data": ["projects", 100, 0, 0.0, 3777.28, 97, 9512, 4751.0, 6578.3, 8839.249999999978, 9509.919999999998, 5.372300419039433, 2.8382954362307937, 1.956902398732137], "isController": false}, {"data": ["ecoverseInfo", 100, 0, 0.0, 4536.029999999997, 124, 13511, 2849.0, 12292.7, 13195.049999999997, 13509.939999999999, 1.7952676744102545, 2.389599453340993, 0.7275743016408747], "isController": false}, {"data": ["serverMetadata", 100, 0, 0.0, 254.17000000000004, 52, 1337, 189.0, 528.9000000000002, 790.9999999999986, 1336.4799999999998, 1.7761042928440758, 0.99038628048239, 0.5914566053318652], "isController": false}, {"data": ["ecoverseUserIds", 100, 0, 0.0, 1328.2399999999998, 111, 5900, 467.0, 4011.1000000000004, 4906.049999999998, 5897.859999999999, 1.9671099221024473, 13.552695801203871, 0.6166428564403179], "isController": false}, {"data": ["userAvatars", 100, 0, 0.0, 2491.480000000001, 111, 5661, 2609.5, 5028.6, 5526.65, 5660.28, 7.764577995185961, 5.142288924800062, 2.639046606879416], "isController": false}, {"data": ["me", 100, 0, 0.0, 426.2799999999999, 54, 1578, 275.5, 941.9000000000004, 1177.35, 1574.2999999999981, 1.7351471404775125, 2.2237333968107995, 1.0200767368822876], "isController": false}, {"data": ["challenges ", 100, 0, 0.0, 8024.540000000001, 4101, 12071, 7727.5, 11362.6, 11774.8, 12070.35, 8.27814569536424, 40.008342818708606, 3.128557015728477], "isController": false}, {"data": ["userDetails", 100, 0, 0.0, 2446.0700000000006, 71, 9329, 978.0, 7090.000000000002, 7994.3499999999985, 9327.599999999999, 1.8097254646470131, 2.3609671342544836, 1.0869663572036123], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1000, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
