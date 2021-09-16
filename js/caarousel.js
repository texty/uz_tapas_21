/**
 * Created by yevheniia on 14.08.20.
 */
d3.select("#next").on("click", function(){
    d3.select("#back").style("opacity", 1);
    let currentLeft = Math.abs(parseInt(d3.select(".slider").style("margin-left").replace("px", "")));
    if(currentLeft < 1700) {
        d3.select(".slider").style("margin-left", -(currentLeft + 350)+ "px")
    } else {
        d3.select(this).style("opacity", 0.2)
    }
});

d3.select("#back").on("click", function(){
    d3.select("#next").style("opacity", 1);
    let currentLeft = parseInt(d3.select(".slider").style("margin-left").replace("px", ""));
    if(currentLeft < 0) {
        let abs_current = Math.abs(currentLeft);
        d3.select(".slider").style("margin-left", -(abs_current - 350)+ "px")
    } else {
        d3.select(this).style("opacity", 0.2);
        d3.select("#next").style("opacity", 1)
    }
});

