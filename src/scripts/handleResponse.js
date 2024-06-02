export class ResponseHandle {

  constructor(asyncFunction) {
    this.asyncFunction = asyncFunction;
    this.results = null;
    this.count = null;
    this.next = null;
    this.previous = null;
    this.total_pages = null;
    this.initialize();
  }

  async initialize() {
    try {
      const data = await this.asyncFunction();
      this.results = data.results;
      this.count = data.count;
      this.next = data.next;
      this.previous = data.previous;
      this.total_pages = data.total_pages;
    } catch (error) {
      console.error("Error fetching data:", error);
    } 
  }
  async getResults() {
    await this.initialize();
    return this.results
  }

  async getPaginate() {
    await this.initialize();
    return {
      count: this.count,
      next: this.next,
      previous: this.previous,
      total_pages: this.total_pages
    };
  }
}

