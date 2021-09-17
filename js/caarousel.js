/**
 * Created by yevheniia on 14.08.20.
 */
d3.select("#next").on("click", function(){
    d3.select("#back").style("opacity", 1);
    let currentLeft = Math.abs(parseInt(d3.select(".slider").style("margin-left").replace("px", "")));
    if(currentLeft < 2100) {
        d3.select(".slider").style("margin-left", -(currentLeft + 350)+ "px")
        let new_left = currentLeft + 350;
        if(new_left == 2100){
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
        let new_left = abs_current - 350;
        d3.select(".slider").style("margin-left", -(abs_current - 350)+ "px")
        if(new_left == 0){
            d3.select(this).style("opacity", 0.2);
        }
    } else {
        d3.select(this).style("opacity", 0.2);
        d3.select("#next").style("opacity", 1)
    }
});

