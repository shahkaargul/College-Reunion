// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Add timeline scroll highlighting
  const timelineItems = document.querySelectorAll('.event-item');
  
  const highlightTimelineItem = () => {
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (itemTop < windowHeight * 0.75 && itemBottom > windowHeight * 0.25) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', highlightTimelineItem);
  
  // Add countdown timer to next event
  function updateNextEvent() {
    const now = new Date();
    const events = Array.from(timelineItems).map(item => {
      const timeStr = item.querySelector('.time').textContent;
      const [hours, minutes] = timeStr.match(/(\d+):(\d+)/).slice(1);
      const eventTime = new Date(now);
      eventTime.setHours(hours, minutes, 0);
      return { element: item, time: eventTime };
    });

    const nextEvent = events.find(event => event.time > now);
    
    events.forEach(event => {
      event.element.classList.remove('next-event');
    });

    if (nextEvent) {
      nextEvent.element.classList.add('next-event');
    }
  }

  setInterval(updateNextEvent, 1000);
  updateNextEvent();
});

// Smooth scroll for location clicks
document.querySelectorAll('.location').forEach(location => {
  location.addEventListener('click', function() {
    const venue = this.textContent.trim();
    // You could add a map popup or navigation here
    console.log(`Navigating to: ${venue}`);
  });
});
