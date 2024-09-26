// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const sectionHeight = 800;


const mm = gsap.matchMedia();


mm.add("(min-width: 992px)", () => {
  // Set the sticky section
  ScrollTrigger.create({
    trigger: "#machine-animation",
    start: "top top",
    end: `+=${sectionHeight}`,
    pin: true,
    scrub: true,
  });

  
  gsap.to("#part2", {
    y: -140,
    x: 550,
    scale: 1,
    scrollTrigger: {
      trigger: ".machine-animation",
      start: "top top",
      end: `+=${sectionHeight}`,
      scrub: true,
    }
  });


  gsap.to(["#part3", "#part3_1"], {
    x: 120,
    y: -200,
    rotation: 0,
    scrollTrigger: {
      trigger: ".machine-animation",
      start: "top top",
      end: `+=${sectionHeight}`,
      scrub: true,
    }
  });

  
  gsap.to(["#part4", "#part4_1"], {
    x: 150,
    y: -350,
    rotation: 0,
    scrollTrigger: {
      trigger: ".machine-animation",
      start: "top top",
      end: `+=${sectionHeight}`,
      scrub: true,
    }
  });

  
  gsap.to("#part5", {
    x: -250,
    y: -150,
    rotation: 0,
    scrollTrigger: {
      trigger: ".machine-animation",
      start: "top top",
      end: `+=${sectionHeight}`,
      scrub: true,
    }
  });

  // Hover effects for parts
  document.querySelectorAll(".machine-part").forEach((part) => {
    part.addEventListener("mouseenter", () => {
      part.classList.add('show');
      
      document.querySelectorAll(".machine-part").forEach((otherPart) => {
        if (otherPart !== part) {
          otherPart.classList.add('hide');
        }
      });
    });

    part.addEventListener("mouseleave", () => {
      part.classList.remove('show');

      document.querySelectorAll(".machine-part").forEach((otherPart) => {
        otherPart.classList.remove('hide');
      });
    });
  });

  return () => {
    ScrollTrigger.getAll().forEach(st => st.kill());
  };
});

// results section 
// Animate the `.unit` and `svg` when the #results section comes into the viewport
gsap.from('.unit', {
  x: -100, // Start from the left
  opacity: 0, // Start with invisible
  duration: 1, // Animation duration
  stagger: 0.3, // Delay between each `.unit`
  scrollTrigger: {
    trigger: '#results', // The section to trigger the animation
    start: 'top 80%', // Trigger when the top of the section reaches 80% of the viewport height
    toggleActions: 'play none none none', // Play the animation once
    markers: false // Shows markers for debugging (remove this in production)
  }
});

// Animate the SVG separately (for all .svg elements in the section)
gsap.from('.unit svg', {
  x: -100, // Animate the svg from left to right
  opacity: 0, // Start with invisible
  duration: 1.2, // Slightly longer animation for the SVG
  scrollTrigger: {
    trigger: '#results', // The same section
    start: 'top 80%', // The trigger point
    toggleActions: 'play none none none', // Play the animation once
  }
});

// counter : 
document.querySelectorAll('.counter').forEach(counter => {
  const targetNumber = parseInt(counter.dataset.target); // Get the target number from data attribute

  gsap.fromTo(counter, {
      innerHTML: 0 // Start the count at 0
  }, {
      innerHTML: targetNumber, // End at the target number
      duration: 3, // Duration of the count animation
      ease: 'power1.inOut', // Ease effect
      scrollTrigger: {
          trigger: counter, // Trigger when the counter is in the viewport
          start: 'top 80%', // Start when the top of the element reaches 80% of the viewport
          toggleActions: 'play none none none', // Play once
      },
      snap: { innerHTML: 1 }, // Snap the value to whole numbers
      onUpdate: function () {
          counter.innerHTML = Math.ceil(counter.innerHTML) + '%'; // Update the counter and append a percentage sign
      }
  });
});