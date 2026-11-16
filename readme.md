# JSON response normaliser - roadmap.sh project

JS JSON/API response normaliser that separates and returns responses based on conditions. Using a draft api response.

This project includes 3 functions for returning responses:
1. normaliseArticles() - returns JSON with published article summaries 
2. toArticleSummary() - returns an object with article id, title, author and views
3. getPublishedArticles() returns the entire article obj if its status is 'published'

### improvements
This project could be improved by:
- implementing a real api call, demonstrating real-world fetch usage
- additional return functions for varied cases, eg. getAuthors() or filterbyViews()

### notes
since this is a simple roadmap.sh project I didn't want to modify the challenge instructions, however, it's interesting to consider how this project could be improved further and adjusted to various apis!
