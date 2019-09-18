import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const originalConsoleError = console.error; // eslint-disable-line no-console

const error = (message, offendingValue, stackTrace) => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message);
  }

  originalConsoleError(message);
  originalConsoleError(offendingValue);
  originalConsoleError(stackTrace);
};

console.error = error; // eslint-disable-line no-console
