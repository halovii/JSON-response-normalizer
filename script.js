// JSON response normaliser 09/07/2026 - roadmap.sh project

// An API response often contains more data than your program needs. 
// Normalize the response into a smaller list of published article summaries.

const apiResponse = {
    data: [
        {
        id: 'a1',
        title: 'Learning JavaScript',
        status: 'published',
        author: { name: 'Ava Stone' },
        stats: { views: 1200 },
        },
        {
        id: 'a2',
        title: 'Draft Notes',
        status: 'draft',
        author: { name: 'Noah Kim' },
        stats: { views: 50 },
        },
        {
        id: 'a3',
        title: 'Async Basics',
        status: 'published',
        author: { name: 'Mina Patel' },
        stats: { views: 900 },
        },
    ],
    meta: {
        total: 3,
    },
};


function getPublishedArticles(response) {
    // return only articles where status is published
    return response.data.filter(data => data.status === 'published');  // returns entire article obj
    // return response.data.filter(data => data.status === 'published').map(data => data.title); // returns just the article title
}; 


function toArticleSummary(article) {
    // return an object with id, title, authorname and views
    return {
        id: article.id,
        title: article.title,
        author: article.author.name, 
        views: article.stats.views
    }
};

function normalizeArticles(response) {
    // return summaries for published articles only
    return `summary: ${JSON.stringify(getPublishedArticles(response))}`; // obj response
};


console.log(normalizeArticles(apiResponse));
console.log(getPublishedArticles(apiResponse).length);
console.log(toArticleSummary(apiResponse.data[0]));