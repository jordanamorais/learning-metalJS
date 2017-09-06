'use strict';

import JSXComponent from 'metal-jsx';

import './metal-test.scss';

class MetalTest extends JSXComponent {
	render() {
		return <div class="metal-test">Hello World</div>;
	}
}

export { MetalTest };
export default MetalTest;
