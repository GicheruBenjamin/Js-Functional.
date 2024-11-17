



export function CurryAdd(a) {
    return function(b) {
      return a + b;
    };
  }

