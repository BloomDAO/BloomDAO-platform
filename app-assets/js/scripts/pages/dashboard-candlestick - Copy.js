$(window).on("load",function(){var e=new Chartist.Line("#ico-token-supply-demand-chart",{labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [5, 9, 7, 8, 5, 3, 5, 4]
    ]
  }, {
    low: 0,
    showArea: true},{axisY:{labelInterpolationFnc:function(e){return e/1e3+"k"},scaleMinSpace:40},axisX:{showGrid:!1,labelInterpolationFnc:function(e,t){return e}},plugins:[Chartist.plugins.tooltip({appendToBody:!0,pointClass:"ct-point"})]});e.on("draw",function(e){"bar"===e.type&&(e.element.attr({style:"stroke-width: 25px",y1:250,x1:e.x1+.001}),e.group.append(new Chartist.Svg("circle",{cx:e.x2,cy:e.y2,r:12},"ct-slice-pie")))}),e.on("created",function(e){var t=e.svg.querySelector("defs")||e.svg.elem("defs");return t.elem("linearGradient",{id:"barGradient3",x1:0,y1:0,x2:0,y2:1}).elem("stop",{offset:0,"stop-color":"rgb(28, 120, 255)"}).parent().elem("stop",{offset:1,"stop-color":"rgb(41, 188, 253)"}),t});var t=new Chartist.Pie("#token-distribution-chart",{series: [20, 20, 20, 20, 20],
        labels: [1, 2, 3, 4, 5]
      }, {
        donut: true,
        showLabel: false
      });
      
      chart.on('draw', function(data) {
        if(data.type === 'slice') {
          // Get the total path length in order to use for dash array animation
          var pathLength = data.element._node.getTotalLength();
      
          // Set a dasharray that matches the path length as prerequisite to animate dashoffset
          data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
          });
      
          // Create animation definition while also assigning an ID to the animation for later sync usage
          var animationDefinition = {
            'stroke-dashoffset': {
              id: 'anim' + data.index,
              dur: 1000,
              from: -pathLength + 'px',
              to:  '0px',
              easing: Chartist.Svg.Easing.easeOutQuint,
              // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
              fill: 'freeze'
            }
          };
      
          // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
          if(data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
          }
      
          // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
          data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
          });
      
          // We can't use guided mode as the animations need to rely on setting begin manually
          // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
          data.element.animate(animationDefinition, false);
        }
      });
      
      // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
      chart.on('created', function() {
        if(window.__anim21278907124) {
          clearTimeout(window.__anim21278907124);
          window.__anim21278907124 = null;
        }
        window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
      },{donut:!0,startAngle:310,donutSolid:!0,donutWidth:30,labelInterpolationFnc:function(e){return t.data.series.reduce(function(e,t){return e+t.value},0)+"%"}});t.on("created",function(){var e=t.svg.elem("defs");e.elem("linearGradient",{id:"ct-crowdsale",x1:0,y1:1,x2:0,y2:0}).elem("stop",{offset:0,"stop-color":"#2191ff"}).parent().elem("stop",{offset:1,"stop-color":"#2abbfe"}),e.elem("linearGradient",{id:"ct-team",x1:0,y1:1,x2:0,y2:0}).elem("stop",{offset:0,"stop-color":"#892ffe"}).parent().elem("stop",{offset:1,"stop-color":"#c37bfe"}),e.elem("linearGradient",{id:"ct-advisors",x1:0,y1:1,x2:0,y2:0}).elem("stop",{offset:0,"stop-color":"#6aecae"}).parent().elem("stop",{offset:1,"stop-color":"#39d98c"}),e.elem("linearGradient",{id:"ct-project-advisors",x1:0,y1:1,x2:0,y2:0}).elem("stop",{offset:0,"stop-color":"#f19686"}).parent().elem("stop",{offset:1,"stop-color":"#e85d44"}),e.elem("linearGradient",{id:"ct-masternodes",x1:0,y1:1,x2:0,y2:0}).elem("stop",{offset:0,"stop-color":"#e67ea5"}).parent().elem("stop",{offset:1,"stop-color":"#fa679d"}),e.elem("linearGradient",{id:"ct-program",x1:0,y1:1,x2:0,y2:0}).elem("stop",{offset:0,"stop-color":"#99f3f3"}).parent().elem("stop",{offset:1,"stop-color":"#33d4d8"})}),t.on("draw",function(e){"label"===e.type&&(0===e.index?e.element.attr({dx:e.element.root().width()/2,dy:e.element.root().height()/2}):e.element.remove())})});