$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  //250 is fade pixels
  });

const subjects = [
  {subject: "HTML", level: 90},
  {subject: "CSS", level: 75},
  {subject: "JavaScript", level: 70},
  {subject: "Vue.js", level: 80},
  {subject: "Photoshop", level: 80},
  {subject: "Table tennis", level: 50}
];
var num = 1;

const content = document.getElementById('skills-content');

const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');
console.log(content)


// For every item in array: create a skill div and a class
subjects.forEach(item => {

  const skill = document.createElement('div');
  skill.classList.add('skill');

// Create a p tag, and a div with a span
  const subject = document.createElement('p');
  subject.classList.add('subject');
  subject.innerHTML = item.subject;

  const skillBar = document.createElement('div');
  skillBar.setAttribute('class', 'skill-bar wow slideInLeft animated skill'+num);
  const skillCount = document.createElement('span');
  skillCount.classList.add('skill-count'+ num)
  skillCount.innerHTML = `${item.level}%`;

// Build the structure
  skillBar.appendChild(skillCount);
  skill.appendChild(subject);
  skill.appendChild(skillBar);
  wrapper.appendChild(skill);
  content.appendChild(wrapper);
  num++;
});

// Run animation once on scroll
(function($){
    new WOW().init();
})(jQuery);
