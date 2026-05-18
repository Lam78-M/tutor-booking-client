import React from 'react';

const DiscountPage = () => {
    return (
        <div>
            <div className="p-2 py-4   ">
	<div className="container border border-gray-500/10 p-2 mx-auto ">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-2xl tracking-tighter font-bold">Up to
				<br  className="sm:hidden" />23% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free 1 week free</span>
				<span className="font-bold text-lg">Medi Queue</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-3 mt-4 lg:mt-0 py-1 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600 shadow-lg hover:scale-105 transition">Shop Now</a>
		</div>
	</div>
</div>
        </div>
    );
};

export default DiscountPage;