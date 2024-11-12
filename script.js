// CSS SLIDE IN ANIMATIONS
function handleScrollAnimation() {
  const headliners = document.querySelectorAll('.container.headliners');
  
  headliners.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 500) {
      section.classList.add('show');
    }
  });
}

document.addEventListener('scroll', handleScrollAnimation);


//TYPE WRITTER EFFECT
function typewriterEffect(element, text, speed = 50, callback) {
  element.innerHTML = '';
  let index = 0;

  function type() {
    if (index < text.length) {
      element.innerHTML += text[index];
      index++;
      setTimeout(type, speed);
    } else if (callback) {callback();}
  }
  type();
}

function fadeInText(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity 1s ease-in";
  setTimeout(() => {element.style.opacity = 1;}, 500); 
}

const text1 = "US Surgeon General Warns of ‘Epidemic of Loneliness’";
const text2 = "The Loneliness Epidemic Is Making Us Sick";
const text3 = "How Social Isolation Impacts Mental Health";

function startAnimation() {
  typewriterEffect(document.getElementById("typewriter1"), text1, 40, () => fadeInText(document.getElementById("t1")));
  typewriterEffect(document.getElementById("typewriter2"), text2, 40, () => fadeInText(document.getElementById("t2")));
  typewriterEffect(document.getElementById("typewriter3"), text3, 40, () => fadeInText(document.getElementById("t3")));

}

function isElementInViewport(el, offset = 0.2) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < windowHeight * (1 - offset) && rect.bottom > 0;
}

function checkVisibility() {
  const newsElement = document.getElementById("news");
  if (newsElement && isElementInViewport(newsElement, 0.2)) { 
    startAnimation();
    window.removeEventListener("scroll", checkVisibility);
    window.removeEventListener("resize", checkVisibility);
  }
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
checkVisibility();


//IMAGE APPEARING ANIMATION
function fadeInImage(entries, observer) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.style.transitionDelay = `${index * 0.3}s`;
      image.style.opacity = 1;
      observer.unobserve(image);
    }
  });
}

const observer_img = new IntersectionObserver(fadeInImage, {threshold: 0.9});
const images = document.querySelectorAll('#images img');
images.forEach((image, index) => {
  observer_img.observe(image);
  image.style.transition = 'opacity 0.3s ease-in-out'; // Ensure transition happens smoothly
});


//GRAPH 1
// D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS 
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

const categories = [
  {
    name: "30-39 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 47.2 },
      { date: new Date("2024-02-01"), value: 47.5 },
      { date: new Date("2024-03-01"), value: 47.0 },
      { date: new Date("2024-04-01"), value: 47.8 },
      { date: new Date("2024-05-01"), value: 47.8 },
      { date: new Date("2024-06-01"), value: 47.9 },
      { date: new Date("2024-07-01"), value: 47.2 },
      { date: new Date("2024-08-01"), value: 46.9 }
    ]
  },
  {
    name: "40-49 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 41.1 },
      { date: new Date("2024-02-01"), value: 41.1 },
      { date: new Date("2024-03-01"), value: 41.6 },
      { date: new Date("2024-04-01"), value: 42.0 },
      { date: new Date("2024-05-01"), value: 42.0 },
      { date: new Date("2024-06-01"), value: 42.5 },
      { date: new Date("2024-07-01"), value: 42.2 },
      { date: new Date("2024-08-01"), value: 40.7 }
    ]
  },
  {
    name: "50-59 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 37.9 },
      { date: new Date("2024-02-01"), value: 36.6 },
      { date: new Date("2024-03-01"), value: 37.6 },
      { date: new Date("2024-04-01"), value: 37.7 },
      { date: new Date("2024-05-01"), value: 37.7 },
      { date: new Date("2024-06-01"), value: 39.3 },
      { date: new Date("2024-07-01"), value: 37.0 },
      { date: new Date("2024-08-01"), value: 37.1 }
    ]
  },
  {
    name: "60-69 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 33.8 },
      { date: new Date("2024-02-01"), value: 33.8 },
      { date: new Date("2024-03-01"), value: 31.9 },
      { date: new Date("2024-04-01"), value: 32.5 },
      { date: new Date("2024-05-01"), value: 32.5 },
      { date: new Date("2024-06-01"), value: 33.4 },
      { date: new Date("2024-07-01"), value: 32.6 },
      { date: new Date("2024-08-01"), value: 30.4 }
    ]
  },
  {
    name: "70-79 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 29.4 },
      { date: new Date("2024-02-01"), value: 28.1 },
      { date: new Date("2024-03-01"), value: 27.5 },
      { date: new Date("2024-04-01"), value: 28.2 },
      { date: new Date("2024-05-01"), value: 28.2 },
      { date: new Date("2024-06-01"), value: 28.1 },
      { date: new Date("2024-07-01"), value: 27.8 },
      { date: new Date("2024-08-01"), value: 27.6 }
    ]
  },
  {
    name: "80 Years Old and Above",
    values: [
      { date: new Date("2024-01-01"), value: 27.3 },
      { date: new Date("2024-02-01"), value: 28.4 },
      { date: new Date("2024-03-01"), value: 23.1 },
      { date: new Date("2024-04-01"), value: 26.8 },
      { date: new Date("2024-05-01"), value: 26.8 },
      { date: new Date("2024-06-01"), value: 27.5 },
      { date: new Date("2024-07-01"), value: 27.4 },
      { date: new Date("2024-08-01"), value: 26.3 }
      ]
  },
  {
    name: "18-29 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 61.3 },
      { date: new Date("2024-02-01"), value: 61.5 },
      { date: new Date("2024-03-01"), value: 58.4 },
      { date: new Date("2024-04-01"), value: 61.0 },
      { date: new Date("2024-05-01"), value: 61.0 },
      { date: new Date("2024-06-01"), value: 62.2 },
      { date: new Date("2024-07-01"), value: 61.8 },
      { date: new Date("2024-08-01"), value: 59.7 }
    ]
  },
];

const x = d3.scaleUtc()
    .domain([new Date("2024-01-01"), new Date("2024-08-01")])
    .range([marginLeft, width - marginRight]);

const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop + 20]);

const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value));

const svg = d3.create("svg")
    .attr("width", width + 20)
    .attr("height", height);

//axis
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).tickFormat(d => `${d}%`));

svg.selectAll(".line")
    .data(categories)
    .join("path")
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", (d, i) => i === categories.length - 1 ? "black" : "grey")
    .attr("stroke-width", 2)
    .attr("d", d => line(d.values))
    .attr("transform", "translate(0, 50)")
    .style("opacity", 0);

svg.selectAll(".points")
    .data(categories)
    .join("g")
    .attr("class", "points")
    .selectAll("circle")
    .data(d => d.values)
    .join("circle")
    .attr("cx", d => x(d.date))
    .attr("cy", d => y(d.value) + 50)
    .attr("r", 3)
    .attr("fill", (d, i, nodes) => nodes[i].parentNode.__data__.name === "Category 1" ? "black" : "grey")
    .style("opacity", 0);

document.getElementById("container").appendChild(svg.node());

// Tooltip
const tooltip = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("display", "none")
    .style("padding", "5px")
    .style("background", "lightgray")
    .style("border", "1px solid gray")
    .style("border-radius", "5px")
    .style("pointer-events", "none");

categories.forEach((category, i) => {
  const className = `point-${category.name.replace(/\s+/g, '-')}`;
  const pointColor = i === categories.length - 1 ? "black" : "grey";

  svg.selectAll(`.${className}`)
      .data(category.values)
      .join("circle")
      .attr("class", className)
      .attr("cx", d => x(d.date))
      .attr("cy", d => y(d.value) + 50)
      .attr("r", 4)
      .attr("fill", pointColor)
      .style("opacity", 0)
      .on("mouseover", (event, d) => {
        tooltip.style("display", "block")
               .html(`Category: ${category.name}<br>Date: ${d.date.toDateString()}<br>Value: ${d.value}`);
      })
      .on("mousemove", (event) => {
        tooltip.style("top", `${event.pageY + 10}px`)
               .style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", () => {
        tooltip.style("display", "none");
      });
});


// Legend
const legendX = 440;
const legendY = 15;
const legendItemWidth = 100;
const legendBoxSize = 15;

const legend = svg.append("g")
  .attr("transform", `translate(${legendX}, ${legendY})`);

// Black
legend.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", legendBoxSize)
  .attr("height", legendBoxSize)
  .attr("fill", "black");

legend.append("text")
  .attr("x", legendBoxSize + 5)
  .attr("y", legendBoxSize / 2)
  .attr("alignment-baseline", "middle")
  .text("Ages 18-29")
  .attr("font-size", "12px");

// Grey
legend.append("rect")
  .attr("x", legendItemWidth)
  .attr("y", 0)
  .attr("width", legendBoxSize)
  .attr("height", legendBoxSize)
  .attr("fill", "grey");

legend.append("text")
  .attr("x", legendItemWidth + legendBoxSize + 5)
  .attr("y", legendBoxSize / 2)
  .attr("alignment-baseline", "middle")
  .text("Ages above 29")
  .attr("font-size", "12px");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            svg.selectAll(".line")
                .transition()
                .duration(1000)
                .attr("transform", "translate(0, 0)")
                .style("opacity", 1);

            svg.selectAll("circle")
                .transition()
                .duration(1000)
                .attr("cy", d => y(d.value)) 
                .style("opacity", 1);

            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.getElementById("container"));
container.append(svg.node());



//GRAPH 2
// D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS 
const width2 = 640;
const height2 = 400;
const marginTop2 = 20;
const marginRight2 = 20;
const marginBottom2 = 30;
const marginLeft2 = 40;

const categories2 = [
  {
    name: "30-39 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 45.4 },
      { date: new Date("2024-02-01"), value: 46.3 },
      { date: new Date("2024-03-01"), value: 46.3 },
      { date: new Date("2024-04-01"), value: 44.7 },
      { date: new Date("2024-05-01"), value: 47.1 },
      { date: new Date("2024-06-01"), value: 48.1 },
      { date: new Date("2024-07-01"), value: 45.9 },
      { date: new Date("2024-08-01"), value: 47.3 }
    ]
  },
  {
    name: "40-49 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 44.7 },
      { date: new Date("2024-02-01"), value: 46.1 },
      { date: new Date("2024-03-01"), value: 47.8 },
      { date: new Date("2024-04-01"), value: 46.5 },
      { date: new Date("2024-05-01"), value: 47.6 },
      { date: new Date("2024-06-01"), value: 46.4 },
      { date: new Date("2024-07-01"), value: 46.7 },
      { date: new Date("2024-08-01"), value: 47.0 }
    ]
  },
  {
    name: "50-59 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 42.7 },
      { date: new Date("2024-02-01"), value: 41.5 },
      { date: new Date("2024-03-01"), value: 41.2 },
      { date: new Date("2024-04-01"), value: 41.4 },
      { date: new Date("2024-05-01"), value: 41.5 },
      { date: new Date("2024-06-01"), value: 41.1 },
      { date: new Date("2024-07-01"), value: 40.1 },
      { date: new Date("2024-08-01"), value: 42.5 }
    ]
  },
  {
    name: "60-69 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 34.4 },
      { date: new Date("2024-02-01"), value: 33.0 },
      { date: new Date("2024-03-01"), value: 34.3 },
      { date: new Date("2024-04-01"), value: 33.9 },
      { date: new Date("2024-05-01"), value: 33.3 },
      { date: new Date("2024-06-01"), value: 34.1 },
      { date: new Date("2024-07-01"), value: 33.4 },
      { date: new Date("2024-08-01"), value: 31.8 }
    ]
  },
  {
    name: "70-79 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 24.5 },
      { date: new Date("2024-02-01"), value: 25.8 },
      { date: new Date("2024-03-01"), value: 24.7 },
      { date: new Date("2024-04-01"), value: 24.2 },
      { date: new Date("2024-05-01"), value: 24.9 },
      { date: new Date("2024-06-01"), value: 24.4 },
      { date: new Date("2024-07-01"), value: 25.2 },
      { date: new Date("2024-08-01"), value: 24.5 }
    ]
  },
  {
    name: "80 Years Old and Above",
    values: [
      { date: new Date("2024-01-01"), value: 23.0 },
      { date: new Date("2024-02-01"), value: 22.7 },
      { date: new Date("2024-03-01"), value: 18.5 },
      { date: new Date("2024-04-01"), value: 20.4 },
      { date: new Date("2024-05-01"), value: 21.4 },
      { date: new Date("2024-06-01"), value: 22.6 },
      { date: new Date("2024-07-01"), value: 21.8 },
      { date: new Date("2024-08-01"), value: 21.8 }
    ]
  },
  {
    name: "18-29 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 48.2 },
      { date: new Date("2024-02-01"), value: 50.9 },
      { date: new Date("2024-03-01"), value: 46.7 },
      { date: new Date("2024-04-01"), value: 47.7 },
      { date: new Date("2024-05-01"), value: 49.1 },
      { date: new Date("2024-06-01"), value: 49.1 },
      { date: new Date("2024-07-01"), value: 49.5 },
      { date: new Date("2024-08-01"), value: 46.8 }
    ]
  }
];

const x2 = d3.scaleUtc()
    .domain([new Date("2024-01-01"), new Date("2024-08-01")])
    .range([marginLeft2, width2 - marginRight2]);
const y2 = d3.scaleLinear()
  .domain([0, 100])
  .range([height2 - marginBottom2, marginTop2+20]);
const line2 = d3.line().x(d => x(d.date)).y(d => y(d.value));
const svg2 = d3.create("svg").attr("width", width2+20).attr("height", height2);

svg2.append("g")
    .attr("transform", `translate(0,${height2 - marginBottom2})`)
    .call(d3.axisBottom(x2));

svg2.append("g")
  .attr("transform", `translate(${marginLeft2},0)`)
  .call(d3.axisLeft(y2).tickFormat(d => `${d}%`));

svg2.selectAll(".line")
    .data(categories2)
    .join("path")
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", (d, i) => i === categories2.length - 1 ? "black" : "grey")
    .attr("stroke-width", 2)
    .attr("d", d => line(d.values))
    .attr("transform", "translate(0, 50)")
    .style("opacity", 0);

svg2.selectAll(".points")
    .data(categories2)
    .join("g")
    .attr("class", "points")
    .selectAll("circle")
    .data(d => d.values)
    .join("circle")
    .attr("cx", d => x(d.date))
    .attr("cy", d => y(d.value) + 50)
    .attr("r", 3)
    .attr("fill", (d, i, nodes) => nodes[i].parentNode.__data__.name === "Category 1" ? "black" : "grey")
    .style("opacity", 0);

document.getElementById("container").appendChild(svg2.node());

// Tooltip
const tooltip2 = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("display", "none")
    .style("padding", "5px")
    .style("background", "lightgray")
    .style("border", "1px solid gray")
    .style("border-radius", "5px")
    .style("pointer-events", "none");

categories2.forEach((category, i) => {
  const className2 = `point-${category.name.replace(/\s+/g, '-')}`;
  const pointColor2 = i === categories2.length - 1 ? "black" : "grey";

  svg2.selectAll(`.${className2}`)
      .data(category.values)
      .join("circle")
      .attr("class", className2)
      .attr("cx", d => x(d.date))
      .attr("cy", d => y(d.value) + 50)
      .attr("r", 4)
      .attr("fill", pointColor2)
      .style("opacity", 0)
      .on("mouseover", (event, d) => {
        tooltip2.style("display", "block")
               .html(`Category: ${category.name}<br>Date: ${d.date.toDateString()}<br>Value: ${d.value}`);
      })
      .on("mousemove", (event) => {
        tooltip2.style("top", `${event.pageY2 + 10}px`)
               .style("left", `${event.pageX2 + 10}px`);
      })
      .on("mouseout", () => {
        tooltip2.style("display", "none");
      });
});


// Legend
const legendX2 = 440;
const legendY2 = 15;
const legendItemWidth2 = 100;
const legendBoxSize2 = 15;

const legend2 = svg2.append("g")
  .attr("transform", `translate(${legendX2}, ${legendY2})`);

// Black
legend2.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", legendBoxSize2)
  .attr("height", legendBoxSize2)
  .attr("fill", "black");

legend2.append("text")
  .attr("x", legendBoxSize2 + 5)
  .attr("y", legendBoxSize2 / 2)
  .attr("alignment-baseline", "middle")
  .text("Ages 18-29")
  .attr("font-size", "12px");

// Grey
legend2.append("rect")
  .attr("x", legendItemWidth2)
  .attr("y", 0)
  .attr("width", legendBoxSize2)
  .attr("height", legendBoxSize2)
  .attr("fill", "grey");

legend2.append("text")
  .attr("x", legendItemWidth2 + legendBoxSize2 + 5)
  .attr("y", legendBoxSize2 / 2)
  .attr("alignment-baseline", "middle")
  .text("Ages above 29")
  .attr("font-size", "12px");

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            svg2.selectAll(".line")
                .transition()
                .duration(1000)
                .attr("transform", "translate(0, 0)")
                .style("opacity", 1);

            svg2.selectAll("circle")
                .transition()
                .duration(1000)
                .attr("cy", d => y(d.value))
                .style("opacity", 1);

            observer2.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer2.observe(document.getElementById("container2"));
container2.append(svg2.node());



//GRAPH 3
// D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS 
const width3 = 640;
const height3 = 400;
const marginTop3 = 20;
const marginRight3 = 20;
const marginBottom3 = 30;
const marginLeft3 = 40;

const categories3 = [
  {
    name: "30-39 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 51.4 },
      { date: new Date("2024-02-01"), value: 51.7 },
      { date: new Date("2024-03-01"), value: 52.3 },
      { date: new Date("2024-04-01"), value: 52.0 },
      { date: new Date("2024-05-01"), value: 52.9 },
      { date: new Date("2024-06-01"), value: 52.7 },
      { date: new Date("2024-07-01"), value: 50.5 },
      { date: new Date("2024-08-01"), value: 50.7 }
    ]
  },
  {
    name: "40-49 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 49.4 },
      { date: new Date("2024-02-01"), value: 48.6 },
      { date: new Date("2024-03-01"), value: 50.7 },
      { date: new Date("2024-04-01"), value: 50.2 },
      { date: new Date("2024-05-01"), value: 49.7 },
      { date: new Date("2024-06-01"), value: 49.4 },
      { date: new Date("2024-07-01"), value: 51.7 },
      { date: new Date("2024-08-01"), value: 49.8 }
    ]
  },
  {
    name: "50-59 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 44.5 },
      { date: new Date("2024-02-01"), value: 47.3 },
      { date: new Date("2024-03-01"), value: 46.3 },
      { date: new Date("2024-04-01"), value: 45.0 },
      { date: new Date("2024-05-01"), value: 46.0 },
      { date: new Date("2024-06-01"), value: 45.0 },
      { date: new Date("2024-07-01"), value: 47.2 },
      { date: new Date("2024-08-01"), value: 46.2 }
    ]
  },
  {
    name: "60-69 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 43.2 },
      { date: new Date("2024-02-01"), value: 42.3 },
      { date: new Date("2024-03-01"), value: 41.3 },
      { date: new Date("2024-04-01"), value: 41.7 },
      { date: new Date("2024-05-01"), value: 42.8 },
      { date: new Date("2024-06-01"), value: 42.2 },
      { date: new Date("2024-07-01"), value: 40.9 },
      { date: new Date("2024-08-01"), value: 41.9 }
    ]
  },
  {
    name: "70-79 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 39.5 },
      { date: new Date("2024-02-01"), value: 38.1 },
      { date: new Date("2024-03-01"), value: 39.5 },
      { date: new Date("2024-04-01"), value: 37.0 },
      { date: new Date("2024-05-01"), value: 40.0 },
      { date: new Date("2024-06-01"), value: 40.2 },
      { date: new Date("2024-07-01"), value: 40.3 },
      { date: new Date("2024-08-01"), value: 37.3 }
    ]
  },
  {
    name: "80 Years Old and Above",
    values: [
      { date: new Date("2024-01-01"), value: 39.5 },
      { date: new Date("2024-02-01"), value: 35.1 },
      { date: new Date("2024-03-01"), value: 34.6 },
      { date: new Date("2024-04-01"), value: 33.5 },
      { date: new Date("2024-05-01"), value: 37.4 },
      { date: new Date("2024-06-01"), value: 38.2 },
      { date: new Date("2024-07-01"), value: 39.3 },
      { date: new Date("2024-08-01"), value: 33.0 }
    ]
  },
  {
    name: "18-29 Years Old",
    values: [
      { date: new Date("2024-01-01"), value: 52.3 },
      { date: new Date("2024-02-01"), value: 55.2 },
      { date: new Date("2024-03-01"), value: 50.5 },
      { date: new Date("2024-04-01"), value: 50.9 },
      { date: new Date("2024-05-01"), value: 50.4 },
      { date: new Date("2024-06-01"), value: 54.0 },
      { date: new Date("2024-07-01"), value: 48.9 },
      { date: new Date("2024-08-01"), value: 50.5 }
    ]
  }
];

const x3 = d3.scaleUtc()
    .domain([new Date("2024-01-01"), new Date("2024-08-01")])
    .range([marginLeft3, width3 - marginRight3]);
const y3 = d3.scaleLinear()
  .domain([0, 100])
  .range([height3 - marginBottom3, marginTop3+20]);
const line3 = d3.line().x(d => x(d.date)).y(d => y(d.value));
const svg3 = d3.create("svg").attr("width", width3+20).attr("height", height3);

svg3.append("g")
    .attr("transform", `translate(0,${height3 - marginBottom3})`)
    .call(d3.axisBottom(x3));

svg3.append("g")
  .attr("transform", `translate(${marginLeft3},0)`)
  .call(d3.axisLeft(y3).tickFormat(d => `${d}%`));

svg3.selectAll(".line")
    .data(categories3)
    .join("path")
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", (d, i) => i === categories3.length - 1 ? "black" : "grey")
    .attr("stroke-width", 2)
    .attr("d", d => line(d.values))
    .attr("transform", "translate(0, 50)")
    .style("opacity", 0);

svg3.selectAll(".points")
    .data(categories3)
    .join("g")
    .attr("class", "points")
    .selectAll("circle")
    .data(d => d.values)
    .join("circle")
    .attr("cx", d => x(d.date))
    .attr("cy", d => y(d.value) + 50)
    .attr("r", 3)
    .attr("fill", (d, i, nodes) => nodes[i].parentNode.__data__.name === "Category 1" ? "black" : "grey")
    .style("opacity", 0);

document.getElementById("container").appendChild(svg3.node());

// Tooltip 
const tooltip3 = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("display", "none")
    .style("padding", "5px")
    .style("background", "lightgray")
    .style("border", "1px solid gray")
    .style("border-radius", "5px")
    .style("pointer-events", "none");

categories3.forEach((category, i) => {
  const className3 = `point-${category.name.replace(/\s+/g, '-')}`;
  const pointColor3 = i === categories3.length - 1 ? "black" : "grey";

  svg3.selectAll(`.${className3}`)
      .data(category.values)
      .join("circle")
      .attr("class", className3)
      .attr("cx", d => x(d.date))
      .attr("cy", d => y(d.value) + 50)
      .attr("r", 4)
      .attr("fill", pointColor3)
      .style("opacity", 0)
      .on("mouseover", (event, d) => {
        tooltip3.style("display", "block")
               .html(`Category: ${category.name}<br>Date: ${d.date.toDateString()}<br>Value: ${d.value}`);
      })
      .on("mousemove", (event) => {
        tooltip3.style("top", `${event.pageY3 + 10}px`)
               .style("left", `${event.pageX3 + 10}px`);
      })
      .on("mouseout", () => {
        tooltip3.style("display", "none");
      });
});


// Legend
const legendX3 = 440;
const legendY3 = 15;
const legendItemWidth3 = 100;
const legendBoxSize3 = 15;

const legend3 = svg3.append("g")
  .attr("transform", `translate(${legendX3}, ${legendY3})`);

// Black
legend3.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", legendBoxSize3)
  .attr("height", legendBoxSize3)
  .attr("fill", "black");

legend3.append("text")
  .attr("x", legendBoxSize3 + 5)
  .attr("y", legendBoxSize3 / 2)
  .attr("alignment-baseline", "middle")
  .text("Ages 18-29")
  .attr("font-size", "12px");

// Grey
legend3.append("rect")
  .attr("x", legendItemWidth3)
  .attr("y", 0)
  .attr("width", legendBoxSize3)
  .attr("height", legendBoxSize3)
  .attr("fill", "grey");

legend3.append("text")
  .attr("x", legendItemWidth3 + legendBoxSize3 + 5)
  .attr("y", legendBoxSize3 / 2)
  .attr("alignment-baseline", "middle")
  .text("Ages above 29")
  .attr("font-size", "12px");

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            svg3.selectAll(".line")
                .transition()
                .duration(1000)
                .attr("transform", "translate(0, 0)") 
                .style("opacity", 1);

            svg3.selectAll("circle")
                .transition()
                .duration(1000)
                .attr("cy", d => y(d.value))
                .style("opacity", 1);

            observer3.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer3.observe(document.getElementById("container3"));
container3.append(svg3.node());


//GRAPH 4
// D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS D3.JS 
const width4 = 640;
const height4 = 400;
const marginTop4 = 20;
const marginRight4 = 20;
const marginBottom4 = 30;
const marginLeft4 = 80;
const colorScale4 = d3.scaleOrdinal(d3.schemeCategory10);

const categories4 = [
  {
    name: "Social Media",
    values: [
      { date: new Date("1997-01-01"), value: 5.3 },
      { date: new Date("1999-01-01"), value: 8.5 },
      { date: new Date("2000-01-01"), value: 10.1 },
      { date: new Date("2002-01-01"), value: 14.3 },
      { date: new Date("2004-01-01"), value: 20.0 },
      { date: new Date("2005-01-01"), value: 24.3 },
      { date: new Date("2007-01-01"), value: 33.3 },
      { date: new Date("2009-01-01"), value: 47.1 },
      { date: new Date("2012-01-01"), value: 56.1 },
      { date: new Date("2015-01-01"), value: 69.8 },
      { date: new Date("2018-01-01"), value: 76.4 },
      { date: new Date("2023-01-01"), value: 81.8 },
      { date: new Date("2025-01-01"), value: 83.1 },
      { date: new Date("2028-01-01"), value: 84.5 },
      { date: new Date("2030-01-01"), value: 85.5 },
    ]
  },
  {
    name: "Online Gaming",
    values: [
      { date: new Date("1996-01-01"), value: 2.3 },
      { date: new Date("1997-01-01"), value: 7.2 },
      { date: new Date("1998-01-01"), value: 8.8 },
      { date: new Date("2000-01-01"), value: 12.1 },
      { date: new Date("2001-01-01"), value: 15.2 },
      { date: new Date("2002-01-01"), value: 20.1 },
      { date: new Date("2003-01-01"), value: 24.0 },
      { date: new Date("2004-01-01"), value: 29.0 },
      { date: new Date("2005-01-01"), value: 33.5 },
      { date: new Date("2006-01-01"), value: 39.0 },
      { date: new Date("2007-01-01"), value: 45.0 },
      { date: new Date("2008-01-01"), value: 50.0 },
      { date: new Date("2009-01-01"), value: 54.0 },
      { date: new Date("2010-01-01"), value: 58.0 },
      { date: new Date("2011-01-01"), value: 60.6 },
      { date: new Date("2012-01-01"), value: 63.1 },
      { date: new Date("2013-01-01"), value: 65.1 },
      { date: new Date("2014-01-01"), value: 66.1 },
      { date: new Date("2014-01-01"), value: 66.1 },
      { date: new Date("2015-01-01"), value: 67.1 },
      { date: new Date("2016-01-01"), value: 68.1 },
      { date: new Date("2017-01-01"), value: 70.2 },
      { date: new Date("2018-01-01"), value: 69.2 },
      { date: new Date("2019-01-01"), value: 67.2 },
      { date: new Date("2020-01-01"), value: 63.2 },
      { date: new Date("2021-01-01"), value: 62.8 },
      { date: new Date("2022-01-01"), value: 63.3 },
      { date: new Date("2023-01-01"), value: 64.1 },
      { date: new Date("2024-01-01"), value: 67.5 },
      { date: new Date("2025-01-01"), value: 69.1 },
      { date: new Date("2026-01-01"), value: 71.1 },
      { date: new Date("2027-01-01"), value: 71.9 },
      { date: new Date("2028-01-01"), value: 72.9 },
      { date: new Date("2030-01-01"), value: 73.9 }
    ]
  },
  {
    name: "Companion AI",
    values: [
      { date: new Date("2017-01-01"), value: 0.2 },
      { date: new Date("2022-01-01"), value: 1.5 },
      { date: new Date("2025-01-01"), value: 2.1 },
      { date: new Date("2026-01-01"), value: 3.2 },
      { date: new Date("2027-01-01"), value: 5.2 },
      { date: new Date("2028-01-01"), value: 9.4 },
      { date: new Date("2029-01-01"), value: 20.5 },
      { date: new Date("2030-01-01"), value: 44.6 },
    ]
  },
];

const x4 = d3.scaleUtc()
    .domain([new Date("1996-01-01"), new Date("2030-01-01")])
    .range([marginLeft4, width4 - marginRight4]);

const y4 = d3.scaleLinear()
  .domain([0, 100])
  .range([height4 - marginBottom4, marginTop4 + 20]);

const line4 = d3.line()
  .x(d => x4(d.date))
  .y(d => y4(d.value));

const svg4 = d3.create("svg")
  .attr("width", width4 + 50)
  .attr("height", height4);

svg4.append("g")
  .attr("transform", `translate(0,${height4 - marginBottom4})`)
  .call(d3.axisBottom(x4));

svg4.append("g")
  .attr("transform", `translate(${marginLeft4},0)`)
  .call(d3.axisLeft(y4).tickFormat(d => `${d}%`));

svg4.selectAll(".line")
  .data(categories4)
  .join("path")
  .attr("class", "line")
  .attr("fill", "none")
  .attr("stroke", (d, i) => colorScale4(i))
  .attr("stroke-width", 2)
  .attr("d", d => line4(d.values))
  .attr("stroke-dasharray", function() { return this.getTotalLength(); })
  .attr("stroke-dashoffset", function() { return this.getTotalLength(); });

svg4.append("text")
  .attr("text-anchor", "middle")
  .attr("transform", `translate(${marginLeft4 - 65}, ${(height4 / 2)}) rotate(-90)`) 
  .attr("dy", "1em")
  .attr("font-size", "12px")
  .attr("fill", "black")
  .text("Percent of Global Internet Users");

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            svg4.selectAll(".line")
                .transition()
                .duration(4000)
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0);

            observer4.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const legend4 = svg4.append("g")
  .attr("transform", `translate(${width4 - 80}, ${marginTop4})`);

categories4.forEach((category, i) => {
  const legendItem4 = legend4.append("g")
    .attr("transform", `translate(0, ${i * 20})`);

  legendItem4.append("rect")
    .attr("width", 12)
    .attr("height", 12)
    .attr("fill", colorScale4(i));

  legendItem4.append("text")
    .attr("x", 20)
    .attr("y", 10)
    .attr("font-size", "12px")
    .text(category.name);
});

observer4.observe(document.getElementById("container4"));
document.getElementById("container4").appendChild(svg4.node());


// CHATBOT TIMELINE

