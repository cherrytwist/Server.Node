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

    var data = {"OkPercent": 99.9, "KoPercent": 0.1};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.3785, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.25, 500, 1500, "ecoverseHostReferences"], "isController": false}, {"data": [0.005, 500, 1500, "allOpportunities"], "isController": false}, {"data": [0.245, 500, 1500, "projects"], "isController": false}, {"data": [0.28, 500, 1500, "ecoverseInfo"], "isController": false}, {"data": [0.955, 500, 1500, "serverMetadata"], "isController": false}, {"data": [0.535, 500, 1500, "ecoverseUserIds"], "isController": false}, {"data": [0.29, 500, 1500, "userAvatars"], "isController": false}, {"data": [0.805, 500, 1500, "me"], "isController": false}, {"data": [0.0, 500, 1500, "challenges "], "isController": false}, {"data": [0.42, 500, 1500, "userDetails"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1000, 1, 0.1, 5734.274999999996, 50, 40664, 2562.0, 11977.299999999997, 35692.29999999999, 39746.47, 15.309246785058175, 31.044072690217394, 6.170164670085732], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["ecoverseHostReferences", 100, 0, 0.0, 3944.340000000001, 75, 6911, 5035.5, 6446.200000000001, 6690.849999999999, 6910.78, 9.161704076958314, 5.126617613376088, 3.346169262482822], "isController": false}, {"data": ["allOpportunities", 100, 0, 0.0, 28902.2, 1175, 40664, 35632.0, 39723.700000000004, 40078.9, 40660.75, 1.812152293278727, 4.213608017867822, 0.6211576708406574], "isController": false}, {"data": ["projects", 100, 0, 0.0, 4067.96, 105, 8538, 4624.0, 7212.7, 7551.349999999998, 8536.019999999999, 5.837711617046118, 3.0841816258026857, 2.1264320636310567], "isController": false}, {"data": ["ecoverseInfo", 100, 0, 0.0, 4648.840000000001, 117, 11368, 4491.5, 9146.6, 9795.149999999996, 11358.879999999996, 1.8433859312785723, 2.453647484699897, 0.7470753530084059], "isController": false}, {"data": ["serverMetadata", 100, 1, 1.0, 210.20000000000013, 50, 1103, 142.0, 459.70000000000005, 554.5999999999997, 1099.4799999999982, 1.8753985221859646, 1.0378059829901354, 0.6245223594388807], "isController": false}, {"data": ["ecoverseUserIds", 100, 0, 0.0, 1227.2400000000005, 99, 4278, 562.5, 3075.5000000000005, 3445.1499999999996, 4273.849999999998, 2.0417330229899138, 14.06682273163461, 0.6400354495896117], "isController": false}, {"data": ["userAvatars", 100, 0, 0.0, 2150.0199999999995, 111, 5077, 2304.0, 4453.200000000001, 4815.4, 5075.999999999999, 8.298755186721992, 5.496061332987551, 2.820604253112033], "isController": false}, {"data": ["me", 100, 0, 0.0, 459.9599999999999, 53, 1460, 446.5, 1057.3000000000009, 1211.2999999999997, 1458.039999999999, 1.8434878790671951, 2.3798276338833073, 1.0837692414047377], "isController": false}, {"data": ["challenges ", 100, 0, 0.0, 9036.929999999998, 5626, 12819, 9076.0, 12019.8, 12284.4, 12817.079999999998, 7.763372408974458, 37.5204395039205, 2.9340089084698393], "isController": false}, {"data": ["userDetails", 100, 0, 0.0, 2695.06, 71, 7883, 1352.5, 6618.300000000002, 7031.8499999999985, 7881.3099999999995, 1.8416545424409287, 2.4026217966721304, 1.106143759553583], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["502/Bad Gateway", 1, 100.0, 0.1], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1000, 1, "502/Bad Gateway", 1, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["serverMetadata", 100, 1, "502/Bad Gateway", 1, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
