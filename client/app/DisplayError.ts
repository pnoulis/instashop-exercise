import { ErrorHandler } from '@angular/core';

class DisplayError implements ErrorHandler {
  handleError(error: Error) {
    alert(error.message);
  }
}

export { DisplayError };
