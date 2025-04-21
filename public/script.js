// // DOM element references
// const menuButton = document.querySelector('.menu-button');
// const mobileMenu = document.querySelector('.mobile-menu');
// const searchInput = document.getElementById('searchInput');
// const websiteGrid = document.getElementById('websiteGrid');

// // Event listener for mobile menu toggle
// menuButton.addEventListener('click', () => {
//     mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
// });

// // Event listener for search functionality
// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.toLowerCase();
//     const cards = websiteGrid.querySelectorAll('.card');

//     cards.forEach(card => {
//         const name = card.querySelector('h2').textContent.toLowerCase();
//         const description = card.querySelector('p').textContent.toLowerCase();
//         const hashtags = Array.from(card.querySelectorAll('.hashtag')).map(tag => tag.textContent.toLowerCase());

//         if (name.includes(searchTerm) || description.includes(searchTerm) || hashtags.some(tag => tag.includes(searchTerm))) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// });



// Event listener for search functionality
const searchInput = document.getElementById('searchInput');
const websiteGrid = document.getElementById('websiteGrid');
const notFoundMessage = document.getElementById('notFoundMessage');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        websiteGrid.style.display = 'grid';
        notFoundMessage.style.display = 'none';
        searchResultsContainer.style.display = 'none';
        return;
    }

    const filteredTools = allTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.category.toLowerCase().includes(searchTerm)
    );

    if (filteredTools.length === 0) {
        websiteGrid.style.display = 'none';
        notFoundMessage.style.display = 'block';
        searchResultsContainer.style.display = 'none';
    } else {
        websiteGrid.style.display = 'none';
        notFoundMessage.style.display = 'none';
        searchResultsContainer.style.display = 'block';
        searchResultsContainer.querySelector('h2').style.display = 'none';
        displaySearchResults(filteredTools);
    }
});

function displaySearchResults(tools) {
    searchResults.className = 'grid';
    
    searchResults.innerHTML = tools.map(tool => `
        <div class="card">
            <div class="pricing-indicator ${tool.pricing}">${tool.pricing}</div>
            <div class="card-header">
                <div class="card-title">
                    <img src="${tool.logo}" alt="${tool.name} logo" class="card-image">
                    <h2>${tool.name}</h2>
                </div>
            </div>
            <p>${tool.description}</p>
            <div class="card-footer">
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
        </div>
    `).join('');
}

// This would ideally be loaded from a separate JSON file or database
const allTools = [
    // Tools from homepage
    
        {
          "name": "DALL-E",
          "description": "AI system by OpenAI that creates realistic images and art from natural language descriptions, pushing the boundaries of visual creativity.",
          "category": "Image Generation",
          "pricing": "paid",
          "logo": "/logos/dall e.png",
          "url": "https://openai.com/dall-e-2"
        },
        {
          "name": "GitHub Copilot",
          "description": "AI-powered coding assistant that suggests code completions and entire functions in real-time, enhancing developer productivity across various programming languages.",
          "category": "Coding",
          "pricing": "paid",
          "logo": "logos/githubcopilot.png",
          "url": "https://github.com/features/copilot"
        },
        {
          "name": "Copy.ai",
          "description": "AI-powered copywriting tool that generates high-quality content for marketing, blogs, and social media, helping businesses create engaging copy efficiently.",
          "category": "Copywriting",
          "pricing": "freemium",
          "logo": "/logos/copy.ai.png",
          "url": "https://www.copy.ai"
        },
        {
          "name": "SitesGPT",
          "description": "AI-powered website builder that generates custom websites based on user prompts, streamlining the web development process for businesses and individuals.",
          "category": "Web Development",
          "pricing": "freemium",
          "logo": "/logos/sites gpt.png",
          "url": "https://sitesgpt.com"
        },
        {
          "name": "Descript",
          "description": "All-in-one audio and video editing platform powered by AI, offering transcription, overdub, and collaborative editing features for content creators.",
          "category": "Video Editing",
          "pricing": "freemium",
          "logo": "/logos/des.webp",
          "url": "https://www.descript.com"
        },
        {
          "name": "Midjourney",
          "description": "AI-powered image generation tool that creates stunning artworks and illustrations from text descriptions, popular among artists and designers.",
          "category": "Art Generation",
          "pricing": "paid",
          "logo": "/logos/mj-removebg-preview.png",
          "url": "https://www.midjourney.com"
        },
        {
          "name": "Generative AI",
          "description": "Serves as a resource for understanding generative AI, offering insights into its applications, potential impacts on industries, and educational resources.",
          "category": "Content Creation",
          "pricing": "freemium",
          "logo": "/logos/genai.png",
          "url": "https://generativeai.net/"
        },
        {
          "name": "Murf",
          "description": "AI-powered text-to-speech platform offering natural-sounding voices in multiple languages for creating voiceovers, narrations, and audio content.",
          "category": "Text-to-Speech",
          "pricing": "freemium",
          "logo": "/logos/murf-ai3.png",
          "url": "https://murf.ai"
        },
        {
          "name": "Otter.ai",
          "description": "AI-powered transcription and note-taking app that converts speech to text in real-time, ideal for meetings, interviews, and lectures.",
          "category": "Transcription",
          "pricing": "freemium",
          "logo": "/logos/otto.webp",
          "url": "https://otter.ai"
        },
        {
          "name": "QuillBot",
          "description": "AI-powered writing tool that offers paraphrasing, grammar checking, and summarization features to improve writing quality and productivity.",
          "category": "Writing",
          "pricing": "freemium",
          "logo": "/logos/quillbot2.png",
          "url": "https://quillbot.com"
        },
      
      
    // ... add all other tools from homepage ...

    // Tools from Education pages
    {
        "name": "Quizlet",
        "description": "An easy-to-use tool for creating and studying flashcards and quizzes. Perfect for students and teachers looking to improve their learning experience.",
        "category": "Education",
        "pricing": "free",
        "logo": "/LOOGOS2/EDUCATION/QUIZLET.jpg",
        "url": "https://quizlet.com"
      },
      {
        "name": "Summarize",
        "description": "Summarizes long articles or texts into concise summaries. Ideal for users needing quick overviews of lengthy documents.",
        "category": "Text Summarization",
        "pricing": "freemium",
        "logo": "/LOOGOS2/EDUCATION/SUMMARIZER.png",
        "url": "https://www.summarizer.org"
      },
      {
        "name": "Curipod",
        "description": "Interactive presentation tool for teachers and students. Engages students with live quizzes and collaborative activities.",
        "category": "Education",
        "pricing": "free",
        "logo": "/LOOGOS2/EDUCATION/CURIPOD.jpg",
        "url": "https://curipod.com"
      },
      {
        "name": "Class Point",
        "description": "Enhances PowerPoint with interactive quizzes and annotations. Great for educators to make their presentations more engaging.",
        "category": "Education",
        "pricing": "trial",
        "logo": "/LOOGOS2/EDUCATION/CLASSPOINT.png",
        "url": "https://classpoint.io"
      },
      {
        "name": "QillBill",
        "description": "Automates invoicing and bill management for freelancers. Streamlines payment processes and keeps financial records organized.",
        "category": "Finance",
        "pricing": "paid",
        "logo": "/LOOGOS2/EDUCATION/QILLBOT.png",
        "url": "https://quillbot.com/"
      },
      {
        "name": "Gradscope",
        "description": "Helps automate grading for large-scale assessments. Suitable for teachers managing large classes with regular exams.",
        "category": "Education",
        "pricing": "freemium",
        "logo": "/LOOGOS2/EDUCATION/GRADESCOPE.png",
        "url": "https://gradescope.com"
      },
    // ...  Tools from Programers pages ...

    
        {
          "name": "TeleportHQ",
          "description": "A no-code platform for building websites and web apps. It combines AI-powered features with a visual builder to help you prototype and develop quickly.",
          "category": "Web Development",
          "pricing": "free",
          "logo": "/logos/programmes/TELEPORTHQ.png",
          "url": "https://teleporthq.io"
        },
        {
          "name": "Tabnine",
          "description": "An AI-powered code completion tool that integrates with popular IDEs. It helps you write better code, faster, with contextual suggestions.",
          "category": "Code Completion",
          "pricing": "freemium",
          "logo": "/logos/programmes/tabnine.png",
          "url": "https://www.tabnine.com"
        },
        {
          "name": "DeepCode",
          "description": "An AI-powered static code analysis tool that detects critical vulnerabilities and improves code quality. It supports multiple programming languages.",
          "category": "Code Analysis",
          "pricing": "free",
          "logo": "/logos/programmes/deep code.png",
          "url": "https://deepcode.ai"
        },
        {
          "name": "Sourcery",
          "description": "An AI tool that automatically refactors your code to improve its structure, making it cleaner, faster, and easier to understand.",
          "category": "Code Refactoring",
          "pricing": "freemium",
          "logo": "/logos/programmes/sourcery.png",
          "url": "https://sourcery.ai"
        },
        {
          "name": "Codex",
          "description": "An AI model developed by OpenAI that can write code in multiple programming languages based on natural language prompts.",
          "category": "Code Generation",
          "pricing": "free",
          "logo": "/logos/programmes/codex.png",
          "url": "https://openai.com/index/openai-codex"
        },
        {
          "name": "Replit Ghostwriter",
          "description": "An AI-powered code generation tool that integrates with the Replit IDE. Ghostwriter helps you write code faster by suggesting solutions in real time.",
          "category": "Code Generation",
          "pricing": "freemium",
          "logo": "/logos/programmes/replit.png",
          "url": "https://replit.com/ghostwriter"
        },

        //...  Tools from Writing pages ...

{
    "name": "GravityWrite",
    "description": "Advanced AI writing tool for generating long-form content like articles and research papers. Provides grammar checking and enhances the tone of your content.",
    "category": "Writing Assistance",
    "pricing": "paid",
    "logo": "/logos/writings/gravitywrite.png",
    "url": "https://gravitywrite.com"
  },
  {
    "name": "AnySummary",
    "description": "Summarizes articles, blog posts, and documents into concise summaries. Ideal for professionals who need to grasp key ideas quickly.",
    "category": "Summarization",
    "pricing": "free",
    "logo": "/logos/writings/anysummary.webp",
    "url": "https://anysummary.com"
  },
  {
    "name": "WriteSonic",
    "description": "An AI-powered content creation platform for generating articles, blog posts, and marketing copy. It also helps with ad copy and product descriptions.",
    "category": "Content Creation",
    "pricing": "freemium",
    "logo": "/logos/writings/writesonic.png",
    "url": "https://writesonic.com"
  },

   //...  Tools from Youtube pages ...
  {
    "name": "FireCut",
    "description": "An AI video editing tool that automates the editing process, making it easier to create professional-quality videos quickly.",
    "category": "Video Editing",
    "pricing": "freemium",
    "logo": "/LOOGOS2/YOUTUBE/firecut_logo.png",
    "url": "https://firecut.ai"
  },
  {
    "name": "Scribr.ai",
    "description": "A writing assistant that helps generate scripts and outlines for videos, podcasts, and presentations, streamlining content creation.",
    "category": "Writing Assistance",
    "pricing": "paid",
    "logo": "/LOOGOS2/YOUTUBE/SCRIBE.jpg",
    "url": "https://scribehow.com/scribe-ai"
  },
  {
    "name": "Gling",
    "description": "An AI video editing tool that simplifies the editing process with smart suggestions and automated enhancements for a polished look.",
    "category": "Video Editing",
    "pricing": "freemium",
    "logo": "/LOOGOS2/YOUTUBE/gling_ai_logo.jpg",
    "url": "https://www.gling.ai"
  },
  {
    "name": "Opus Clip",
    "description": "Generates short clips from long videos automatically, making it easier to share highlights on social media.",
    "category": "Video Editing",
    "pricing": "paid",
    "logo": "/LOOGOS2/YOUTUBE/opus-pro-icon.webp",
    "url": "https://opusclip.com"
  },
  {
    "name": "Veed.io",
    "description": "Online video editing tool that offers features like subtitles, filters, and effects, making video creation accessible to everyone.",
    "category": "Video Editing",
    "pricing": "freemium",
    "logo": "/LOOGOS2/YOUTUBE/INVIDEO.avif",
    "url": "https://veed.io"
  },
  {
    "name": "Wisecut",
    "description": "AI video editing tool that removes filler words and pauses automatically, creating a smooth and engaging final product.",
    "category": "Video Editing",
    "pricing": "freemium",
    "logo": "/LOOGOS2/YOUTUBE/WISECUY.png",
    "url": "https://wisecut.video"
  },
    //...  Tools from Video pages ...
    {
        "name": "Pictory",
        "description": "Turn long-form content into short videos automatically with this AI tool, perfect for social media platforms.",
        "category": "Video Editing",
        "pricing": "freemium",
        "logo": "/LOOGOS2/videos/pictory.webp",
        "url": "https://pictory.ai"
      },
      {
        "name": "Lumen5",
        "description": "Transforms blog posts and articles into engaging videos using AI. Ideal for content marketers.",
        "category": "Video Editing",
        "pricing": "freemium",
        "logo": "/LOOGOS2/videos/lumen5.webp",
        "url": "https://lumen5.com"
      },
      {
        "name": "Fliki",
        "description": "Create videos and podcasts from text using AI voices, making content creation faster and easier.",
        "category": "Video Editing",
        "pricing": "paid",
        "logo": "/LOOGOS2/videos/King AI.webp",
        "url": "https://fliki.ai"
      },
      {
        "name": "Runway",
        "description": "A creative suite powered by AI for real-time video editing, offering a wide range of tools for creators.",
        "category": "Video Editing",
        "pricing": "freemium",
        "logo": "/LOOGOS2/videos/runway.webp",
        "url": "https://runwayml.com"
      },
      {
        "name": "TensorPix",
        "description": "AI-driven tool for enhancing and upscaling videos and images, providing high-quality outputs for media professionals.",
        "category": "Video Editing",
        "pricing": "paid",
        "logo": "/LOOGOS2/videos/tensorpix.webp",
        "url": "https://tensorpix.ai"
      },
      {
        "name": "AVCLabs Video Enhancer AI",
        "description": "Uses AI to upscale videos to higher resolutions, enhance image quality, and remove noise from videos.",
        "category": "Video Enhancing",
        "pricing": "paid",
        "logo": "/LOOGOS2/videos/AVCLabs Video Enhancer AI.webp",
        "url": "https://avclabs.com"
      },
      {
        "name": "Pixel-AI",
        "description": "AI-driven image generation tool that transforms text prompts into beautiful artworks and illustrations, widely used by creatives and marketers alike.",
        "category": "Art & Design",
        "pricing": "free",
        "logo": "\LOOGOS2\extra\pixcel.png",
        "url": "https://pixlai.netlify.app/"
      },
  //...  Tools from Photo pages ...
      
      









];

const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        mobileMenu.classList.remove('active');
    }
});

console.log("hello");



