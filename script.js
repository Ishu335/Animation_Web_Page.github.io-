function locomotive() 
{
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: (window.innerWidth)-10,
          height: (window.innerHeight)-10,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) 
  {
    var data = `
       ./model_png/male0001.png
       ./model_png/male0002.png
       ./model_png/male0003.png
       ./model_png/male0004.png
       ./model_png/male0005.png
       ./model_png/male0006.png
       ./model_png/male0007.png
       ./model_png/male0008.png
       ./model_png/male0009.png
       ./model_png/male0010.png
       ./model_png/male0011.png
       ./model_png/male0012.png
       ./model_png/male0013.png
       ./model_png/male0014.png
       ./model_png/male0015.png
       ./model_png/male0016.png
       ./model_png/male0017.png
       ./model_png/male0018.png
       ./model_png/male0019.png
       ./model_png/male0020.png
       ./model_png/male0021.png
       ./model_png/male0022.png
       ./model_png/male0023.png
       ./model_png/male0024.png
       ./model_png/male0025.png
       ./model_png/male0026.png
       ./model_png/male0027.png
       ./model_png/male0028.png
       ./model_png/male0029.png
       ./model_png/male0030.png
       ./model_png/male0031.png
       ./model_png/male0032.png
       ./model_png/male0033.png
       ./model_png/male0034.png
       ./model_png/male0035.png
       ./model_png/male0036.png
       ./model_png/male0037.png
       ./model_png/male0038.png
       ./model_png/male0039.png
       ./model_png/male0040.png
       ./model_png/male0041.png
       ./model_png/male0042.png
       ./model_png/male0043.png
       ./model_png/male0044.png
       ./model_png/male0045.png
       ./model_png/male0046.png
       ./model_png/male0047.png
       ./model_png/male0048.png
       ./model_png/male0049.png
       ./model_png/male0050.png
       ./model_png/male0051.png
       ./model_png/male0052.png
       ./model_png/male0053.png
       ./model_png/male0054.png
       ./model_png/male0055.png
       ./model_png/male0056.png
       ./model_png/male0057.png
       ./model_png/male0058.png
       ./model_png/male0059.png
       ./model_png/male0060.png
       ./model_png/male0061.png
       ./model_png/male0062.png
       ./model_png/male0063.png
       ./model_png/male0064.png
       ./model_png/male0065.png
       ./model_png/male0066.png
       ./model_png/male0067.png
       ./model_png/male0068.png
       ./model_png/male0069.png
       ./model_png/male0070.png
       ./model_png/male0071.png
       ./model_png/male0072.png
       ./model_png/male0073.png
       ./model_png/male0074.png
       ./model_png/male0075.png
       ./model_png/male0076.png
       ./model_png/male0077.png
       ./model_png/male0078.png
       ./model_png/male0079.png
       ./model_png/male0080.png
       ./model_png/male0081.png
       ./model_png/male0082.png
       ./model_png/male0083.png
       ./model_png/male0084.png
       ./model_png/male0085.png
       ./model_png/male0086.png
       ./model_png/male0087.png
       ./model_png/male0088.png
       ./model_png/male0089.png
       ./model_png/male0090.png
       ./model_png/male0091.png
       ./model_png/male0092.png
       ./model_png/male0093.png
       ./model_png/male0094.png
       ./model_png/male0095.png
       ./model_png/male0096.png
       ./model_png/male0097.png
       ./model_png/male0098.png
       ./model_png/male0099.png
       ./model_png/male0100.png
       ./model_png/male0101.png
       ./model_png/male0102.png
       ./model_png/male0103.png
       ./model_png/male0104.png
       ./model_png/male0105.png
       ./model_png/male0106.png
       ./model_png/male0107.png
       ./model_png/male0108.png
       ./model_png/male0109.png
       ./model_png/male0110.png
       ./model_png/male0111.png
       ./model_png/male0112.png
       ./model_png/male0113.png
       ./model_png/male0114.png
       ./model_png/male0115.png
       ./model_png/male0116.png
       ./model_png/male0117.png
       ./model_png/male0118.png
       ./model_png/male0119.png
       ./model_png/male0120.png
       ./model_png/male0121.png
       ./model_png/male0122.png
       ./model_png/male0123.png
       ./model_png/male0124.png
       ./model_png/male0125.png
       ./model_png/male0126.png
       ./model_png/male0127.png
       ./model_png/male0128.png
       ./model_png/male0129.png
       ./model_png/male0130.png
       ./model_png/male0131.png
       ./model_png/male0132.png
       ./model_png/male0133.png
       ./model_png/male0134.png
       ./model_png/male0135.png
       ./model_png/male0136.png
       ./model_png/male0137.png
       ./model_png/male0138.png
       ./model_png/male0139.png
       ./model_png/male0140.png
       ./model_png/male0141.png
       ./model_png/male0142.png
       ./model_png/male0143.png
       ./model_png/male0144.png
       ./model_png/male0145.png
       ./model_png/male0146.png
       ./model_png/male0147.png
       ./model_png/male0148.png
       ./model_png/male0149.png
       ./model_png/male0150.png
       ./model_png/male0151.png
       ./model_png/male0152.png
       ./model_png/male0153.png
       ./model_png/male0154.png
       ./model_png/male0155.png
       ./model_png/male0156.png
       ./model_png/male0157.png
       ./model_png/male0158.png
       ./model_png/male0159.png
       ./model_png/male0160.png
       ./model_png/male0161.png
       ./model_png/male0162.png
       ./model_png/male0163.png
       ./model_png/male0164.png
       ./model_png/male0165.png
       ./model_png/male0166.png
       ./model_png/male0167.png
       ./model_png/male0168.png
       ./model_png/male0169.png
       ./model_png/male0170.png
       ./model_png/male0171.png
       ./model_png/male0172.png
       ./model_png/male0173.png
       ./model_png/male0174.png
       ./model_png/male0175.png
       ./model_png/male0176.png
       ./model_png/male0177.png
       ./model_png/male0178.png
       ./model_png/male0179.png
       ./model_png/male0180.png
       ./model_png/male0181.png
       ./model_png/male0182.png
       ./model_png/male0183.png
       ./model_png/male0184.png
       ./model_png/male0185.png
       ./model_png/male0186.png
       ./model_png/male0187.png
       ./model_png/male0188.png
       ./model_png/male0189.png
       ./model_png/male0190.png
       ./model_png/male0191.png
       ./model_png/male0192.png
       ./model_png/male0193.png
       ./model_png/male0194.png
       ./model_png/male0195.png
       ./model_png/male0196.png
       ./model_png/male0197.png
       ./model_png/male0198.png
       ./model_png/male0199.png
       ./model_png/male0200.png
       ./model_png/male0201.png
       ./model_png/male0202.png
       ./model_png/male0203.png
       ./model_png/male0204.png
       ./model_png/male0205.png
       ./model_png/male0206.png
       ./model_png/male0207.png
       ./model_png/male0208.png
       ./model_png/male0209.png
       ./model_png/male0210.png
       ./model_png/male0211.png
       ./model_png/male0212.png
       ./model_png/male0213.png
       ./model_png/male0214.png
       ./model_png/male0215.png
       ./model_png/male0216.png
       ./model_png/male0217.png
       ./model_png/male0218.png
       ./model_png/male0219.png
       ./model_png/male0220.png
       ./model_png/male0221.png
       ./model_png/male0222.png
       ./model_png/male0223.png
       ./model_png/male0224.png
       ./model_png/male0225.png
       ./model_png/male0226.png
       ./model_png/male0227.png
       ./model_png/male0228.png
       ./model_png/male0229.png
       ./model_png/male0230.png
       ./model_png/male0231.png
       ./model_png/male0232.png
       ./model_png/male0233.png
       ./model_png/male0234.png
       ./model_png/male0235.png
       ./model_png/male0236.png
       ./model_png/male0237.png
       ./model_png/male0238.png
       ./model_png/male0239.png
       ./model_png/male0240.png
       ./model_png/male0241.png
       ./model_png/male0242.png
       ./model_png/male0243.png
       ./model_png/male0244.png
       ./model_png/male0245.png
       ./model_png/male0246.png
       ./model_png/male0247.png
       ./model_png/male0248.png
       ./model_png/male0249.png
       ./model_png/male0250.png
       ./model_png/male0251.png
       ./model_png/male0252.png
       ./model_png/male0253.png
       ./model_png/male0254.png
       ./model_png/male0255.png
       ./model_png/male0256.png
       ./model_png/male0257.png
       ./model_png/male0258.png
       ./model_png/male0259.png
       ./model_png/male0260.png
       ./model_png/male0261.png
       ./model_png/male0262.png
       ./model_png/male0263.png
       ./model_png/male0264.png
       ./model_png/male0265.png
       ./model_png/male0266.png
       ./model_png/male0267.png
       ./model_png/male0268.png
       ./model_png/male0269.png
       ./model_png/male0270.png
       ./model_png/male0271.png
       ./model_png/male0272.png
       ./model_png/male0273.png
       ./model_png/male0274.png
       ./model_png/male0275.png
       ./model_png/male0276.png
       ./model_png/male0277.png
       ./model_png/male0278.png
       ./model_png/male0279.png
       ./model_png/male0280.png
       ./model_png/male0281.png
       ./model_png/male0282.png
       ./model_png/male0283.png
       ./model_png/male0284.png
       ./model_png/male0285.png
       ./model_png/male0286.png
       ./model_png/male0287.png
       ./model_png/male0288.png
       ./model_png/male0289.png
       ./model_png/male0290.png
       ./model_png/male0291.png
       ./model_png/male0292.png
       ./model_png/male0293.png
       ./model_png/male0294.png
       ./model_png/male0295.png
       ./model_png/male0296.png
       ./model_png/male0297.png
       ./model_png/male0298.png
       ./model_png/male0299.png
       ./model_png/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  