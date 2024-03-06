import Parse from 'parse';

class Query extends Parse.Query {
  constructor(className: string) {
    super(className);
  }

  strip<Class>(parseResponse: any): Promise<Class[]> {
    return parseResponse.map((obj: any) => ({
      id: obj.id,
      ...obj.attributes,
    }));
  }

  override find<Class>(): Promise<Class[]> {
    return super.find().then((res) => this.strip<Class>(res));
  }
}

export { Query };
