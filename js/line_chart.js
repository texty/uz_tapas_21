Promise.all([
    d3.csv("data/fig_1.csv")
]).then(function(input){

   var default_group = "number";

    var margin = {top: 30, right: 20, bottom: 30, left: 80},
        width = d3.select("#chart-1").node().getBoundingClientRect().width - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var parseDate = d3.timeParse("%Y-%m-%d");

    input[0].forEach(function(d){
        d.month = parseDate(d.month);
        d.value = +d.value;
    });

    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var xAxis = d3.axisBottom(x)
        .ticks(5)
        .tickFormat(multiFormat)
        .tickSize(-height);

    var yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickFormat(nFormatter)
        .tickSize(-width);

    var valueline = d3.line()
        .x(function(d) { return x(d.month); })
        .y(function(d) { return y(d.value); });


    var svg = d3.select("#chart-1")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


    const init_data = input[0].filter(function(d){ return d.group === "number"});

    // Scale the range of the data
    x.domain(d3.extent(init_data, function(d) { return d.month; }));
    y.domain([0, d3.max(init_data, function(d) { return d.value; })]);


    // Add the valueline path.
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(init_data))
        .style("fill", "none")
        .style("stroke", "green")
        .style("stroke-width", "3px");

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);


    function updateData(group) {

        var data = input[0].filter(function (d) {
            return d.group === group
        });


        var new_width = d3.select("#chart-1").node().getBoundingClientRect().width - margin.left - margin.right;

        d3.select("#chart-1").select("svg").attr("width", new_width + margin.left + margin.right);

       //d3.selectAll(".y.axis > .tick > line").attr("x2", new_width);

        // Scale the range of the data again
        x
            .range([0, new_width])
            .domain(d3.extent(data, function (d) {return d.month; }));

        y
            .domain([0, d3.max(data, function (d) { return d.value; })]);

        // Define the line
        var new_valueline = d3.line()
            .x(function(d) { return x(d.month); })
            .y(function(d) { return y(d.value); });


        // Make the changes
        svg.selectAll(".line")
            .transition()
            .duration(750)
            .attr("d", new_valueline(data));

        svg.selectAll(".x.axis")
            .transition()
            .duration(750)
            .call(xAxis);

        svg.selectAll(".y.axis")
            .transition()
            .duration(750)
            .call(d3.axisLeft(y)
                .ticks(5)
                .tickFormat(function(d){
                    return group != "success"  ?  nFormatter(d) : d+"%"})
                .tickSize(-new_width)
            )
    }

    d3.selectAll(".switch-line").on("click", function(){
        d3.selectAll(".switch-line").classed("active", false);
        d3.select(this).classed("active", true);
        var group_value = d3.select(this).attr("value");
        default_group = group_value;
        updateData(group_value);
    });

    window.addEventListener("resize", function() {
        updateData(default_group);
    });

});





