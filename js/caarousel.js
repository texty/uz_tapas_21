d3.select("#next").on("click", function(){
    d3.select("#back").style("opacity", 1);
    let currentLeft = Math.abs(parseInt(d3.select(".slider").style("margin-left").replace("px", "")));
    if(currentLeft < 2400) {
        d3.select(".slider").style("margin-left", -(currentLeft + 400)+ "px")
        let new_left = currentLeft + 400;
        if(new_left == 2400){
            d3.select(this).style("opacity", 0.2);
        }
    } else {
        d3.select(this).style("opacity", 0.2)
    }
});


d3.select("#back").on("click", function(){
    d3.select("#next").style("opacity", 1);
    let currentLeft = parseInt(d3.select(".slider").style("margin-left").replace("px", ""));
    if(currentLeft < 0) {
        let abs_current = Math.abs(currentLeft);
        let new_left = abs_current - 400;
        d3.select(".slider").style("margin-left", -(abs_current - 400)+ "px")
        if(new_left == 0){
            d3.select(this).style("opacity", 0.2);
        }
    } else {
        d3.select(this).style("opacity", 0.2);
        d3.select("#next").style("opacity", 1)
    }
});

