/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect(addSnapshotSerializer(createSerializer({ node: deep })));
const noScroll = () => {};
Object.defineProperty(window, scrollTo, { value: noScroll, writable: true });
