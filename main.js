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