import { useState } from 'react';

const useIsLoading = (asyncFunc) => {
	const [isLoading, setIsLoading] = useState(false);

	const invokeAsyncFunc = (...args) => {
		setIsLoading(true);
		return asyncFunc(...args).finally(() => setIsLoading(false));
	};

	return [invokeAsyncFunc, isLoading];
};

export default useIsLoading;
