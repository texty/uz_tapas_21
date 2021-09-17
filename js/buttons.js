d3.selectAll("a")
    .attr("target", "_blank");


d3.selectAll(".button-black")
.on("click", function(){
    let showMore = d3.select("#project-about");
    d3.select("#project-about")
        .classed("not-visible", !showMore.classed("not-visible"))
        .transition()
        .duration(750)
        .style("max-height", showMore.classed("not-visible") ? "1px" : "500px")      
        .style("overflow", "hidden");
})


d3.selectAll("#show-why")
.on("click", function(){
    let showMore = d3.select("#more-why");
    d3.select("#more-why")
        .classed("not-visible", !showMore.classed("not-visible"))
        .transition()
        .duration(750)
        .style("max-height", showMore.classed("not-visible") ? "1px" : "500px")      
        .style("overflow", "hidden");
})    