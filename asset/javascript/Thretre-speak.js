// Open Modal
function openModal(comedian) {
    const modal = document.getElementById('comedian-modal');
    const name = document.getElementById('comedian-name');
    const bio = document.getElementById('comedian-bio');
    const career = document.getElementById('comedian-career');
    
    if (comedian === 'Munawar Faruqui') {
        name.textContent = "Munawar Faruqui";
        name.style.textAlign = "center";
        bio.textContent = "Munawar Faruqui is an Indian stand-up comedian, rapper, and writer. He is known for his observational humor and satirical takes on social and cultural issues. His comedy often reflects on personal experiences, social norms, and current affairs, making it relatable to a wide audience.Born on January 28, 1992, in Junagadh, Gujarat, Munawar began his career in comedy by performing at open mics. He gained popularity through his witty and insightful performances, gradually building a fanbase across the country.In 2022, Munawar gained wider recognition after winning the first season of the reality show Lock Upp. Despite facing controversies, including an arrest in 2021 for allegedly hurting religious sentiments, Munawar's resilience and creative work in comedy and rap have made him a prominent figure in the Indian entertainment industry.";
    } else if (comedian === 'Vir Das') {
        name.textContent = "Vir Das";
        name.style.textAlign = "center";
        bio.textContent = "Vir Das is a renowned Indian stand-up comedian, actor, and writer, known for his sharp wit and global appeal. With a career spanning over a decade, he gained widespread recognition for his stand-up specials, especially on Netflix, including Abroad Understanding and For India. Vir's comedy often blends personal anecdotes with social and political commentary, tackling themes such as identity, culture, and the global perception of India. His unique style, which appeals to both Indian and international audiences, has earned him a significant fanbase and established him as one of India's most successful comedians.";
        career.textContent = "Famous for: 'Chappelle's Show', 'Killing Them Softly', Emmy Awards.";
    } else if (comedian === 'Zakir Khan') {
        name.textContent = "Zakir Khan";
        name.style.textAlign = "center";
        bio.textContent = "Zakir Khan is one of India's most popular stand-up comedians, known for his relatable humor and storytelling style. He rose to fame with his unique take on everyday life, relationships, and the struggles of middle-class Indians, often delivered with a touch of poetry. Zakir’s signature phrases like Sakht Launda and specials such as Haq Se Single have made him a household name. His ability to connect with audiences through wit, charm, and raw emotion has established him as a prominent figure in Indias comedy scene.";
        career.textContent = "Famous for: 'Baby Cobra', 'Always Be My Maybe', Netflix Specials.";
    } else if (comedian === 'Kenny Sebastian') {
        name.textContent = "Kenny Sebastian";
        name.style.textAlign = "center";
        bio.textContent = "Kenny Sebastian is a renowned Indian stand-up comedian, musician, and filmmaker, known for his clean, relatable humor and quirky observations on everyday life. His comedy often revolves around topics like middle-class struggles, relationships, and cultural nuances, appealing to a wide audience. Kenny has released several successful specials, including The Most Interesting Person in the Room on Amazon Prime, and has a significant presence on YouTube, where his sketches and stand-up clips have garnered millions of views. His charming personality and versatile performances have made him one of India's most beloved comedians.";
        career.textContent = "Famous for: 'Middle Class Restaurant Problems' and 'Indian Parents and Their Wedding Logic'. ";
    } else if (comedian === 'Atul Khatri') {
        name.textContent = "Atul Khatri";
        name.style.textAlign = "center";
        bio.textContent = "Atul Khatri is a renowned Indian stand-up comedian and former businessman who made a successful transition from the corporate world to comedy. Known for his sharp wit and humorous takes on middle-age life, parenting, and Indian culture, Atul has a relatable and engaging style that appeals to diverse audiences. He gained popularity through his performances at live shows, comedy festivals, and his association with the comedy collective East India Comedy (EIC). With appearances on international platforms like Netflix Comedians of the World, Atul has established himself as one of India's leading stand-up comedians.";
        career.textContent = "Famous for: 'Girls Trip', 'The Last O.G.', Grammy Award.";
    }

    modal.style.display = "block";
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('comedian-modal');
    modal.style.display = "none";
}
