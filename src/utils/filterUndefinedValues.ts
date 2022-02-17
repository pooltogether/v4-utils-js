function filterUndefinedValues<T>(ts: (T | undefined)[]): T[] {
    return ts.filter((t: T | undefined): t is T => Boolean(t));
}

export default filterUndefinedValues;
