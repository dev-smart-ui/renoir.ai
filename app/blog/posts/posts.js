 

export const post1 = {
    title: "Leveraging Data for Smarter Decisions",
    content: "Data-driven decision-making is no longer optional. Companies that harness the power of data analytics gain a significant competitive advantage. We discuss how businesses can collect, analyze, and use data to make smarter, more informed decisions.",
    html:`<div class="prose prose-lg max-w-none text-gray-300">
  <h1 class="text-4xl font-bold text-[#6EF2BE] mb-6">The Power of AI in Modern Business</h1>
  
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nisi nec nisl posuere suscipit non in lacus.
    Proin dictum tortor ut ipsum scelerisque, nec feugiat arcu blandit.
  </p>

  <img style="height:100px; width:100px ; float:left; padding-right:20px" src="/ai.jpg" alt="AI in business" class="rounded-lg shadow-lg my-6 w-full">

  <h2 class="text-2xl font-semibold text-[#6EF2BE] mt-6">How AI is Changing the Industry</h2>
  <p>
    Suspendisse potenti. Fusce malesuada nunc nec risus fringilla, eu congue urna luctus. 
    Vivamus sed quam sit amet libero gravida pharetra. Phasellus scelerisque ex a risus pellentesque, eu consectetur urna dignissim.
  </p>

  <ul class="list-disc list-inside my-4">
    <li>Automated customer interactions</li>
    <li>Enhanced data-driven decision-making</li>
    <li>AI-powered predictive analytics</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#6EF2BE] mt-6">The Future of AI</h2>
  <p>
    Curabitur nec est vehicula, vestibulum lacus ac, scelerisque nunc. Donec elementum magna non suscipit tristique.
    Pellentesque at quam ut sapien malesuada efficitur id non risus.
  </p>

  <blockquote class="border-l-4 border-[#6EF2BE] pl-4 italic my-6">
    "AI is not just a tool; it is an extension of human capability that will redefine industries."
  </blockquote>

  <p>
    In conclusion, AI is reshaping industries by improving efficiency, enhancing customer experiences, and providing deep insights into data.
  </p>
 
</div>
 `
  };
  
  export const post2 = {
    title: "lorem post",
    content: "Lorem ipsum dolor sit amet, consectetur ",
    html:`<div class="prose prose-lg max-w-none text-gray-300">
  <h1 class="text-4xl font-bold text-[#6EF2BE] mb-6">How AI is Revolutionizing Marketing</h1>

  <p>
    Artificial Intelligence (AI) is transforming the marketing landscape by enabling data-driven decision-making, automating processes, and enhancing customer engagement. Businesses that leverage AI can gain a significant competitive advantage.
  </p>

  <img style="height:100px; width:100px ; float:left; padding-right:20px" src="/ai.jpg" alt="AI in business" class="rounded-lg shadow-lg my-6 w-full">

  <h2 class="text-2xl font-semibold text-[#6EF2BE] mt-6">The Benefits of AI in Marketing</h2>
  <p>
    AI offers several benefits to marketers, including automation, personalization, and improved analytics. Here are some of the key ways AI is reshaping marketing:
  </p>

  <ul class="list-disc list-inside my-4">
    <li>Automated content creation and curation</li>
    <li>Personalized recommendations based on user behavior</li>
    <li>Improved ad targeting and audience segmentation</li>
    <li>Chatbots for enhanced customer service</li>
    <li>Advanced data analytics for better decision-making</li>
  </ul>

  <h2 class="text-2xl font-semibold text-[#6EF2BE] mt-6">AI-Powered Personalization</h2>
  <p>
    One of the most powerful aspects of AI in marketing is its ability to deliver personalized experiences. AI-driven algorithms analyze customer preferences and behaviors to suggest tailored products, emails, and ads, increasing engagement and conversion rates.
  </p>

  <blockquote class="border-l-4 border-[#6EF2BE] pl-4 italic my-6">
    "AI is revolutionizing marketing by making personalization scalable and effective."
  </blockquote>

  <h2 class="text-2xl font-semibold text-[#6EF2BE] mt-6">The Future of AI in Marketing</h2>
  <p>
    As AI continues to evolve, its role in marketing will expand. Companies that adopt AI-driven strategies will be able to optimize campaigns, improve customer experiences, and stay ahead of the competition.
  </p>
 
</div>

 `
  };

   
 const lorem = Array(5).fill(post2).map((item , key)=> {
  return {...item , title:"lorem post "+(key+2)}
 })
  

 export const list = [post1 , post2 , ...lorem]