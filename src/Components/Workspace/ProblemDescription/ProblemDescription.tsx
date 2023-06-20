import React from 'react';
import { AiFillLike, AiOutlineLoading3Quarters, AiFillDislike, AiFillStar } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import { TiStarOutline } from "react-icons/ti";

type ProblemDescriptionProps = {
    
};

const ProblemDescription:React.FC<ProblemDescriptionProps> = () => {
    
    return (
        <>
            <div className='bg-dark-layer-1'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>1. two sum</div>
						</div>
						{/* {!loading && currentProblem && ( */}
							<div className='flex items-center mt-3'>
								<div
									className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
								>
									easy
								</div>
								{/* {(solved || _solved) && ( */}
									<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
										<BsCheck2Circle />
									</div>
								{/* )} */}
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'
								>
									{/* {liked && !updating && <AiFillLike className='text-dark-blue-s' />}
									{!liked && !updating && <AiFillLike />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />} */}
                                    <AiFillLike/>
									<span className='text-xs'>120</span>
								</div>
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'
								>
									{/* {disliked && !updating && <AiFillDislike className='text-dark-blue-s' />}
									{!disliked && !updating && <AiFillDislike />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />} */}
                                    <AiFillDislike/>
									<span className='text-xs'>20</span>
								</div>
								<div
									className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '
								>
									{/* {starred && !updating && <AiFillStar className='text-dark-yellow' />}
									{!starred && !updating && <TiStarOutline />}
									{updating && <AiOutlineLoading3Quarters className='animate-spin' />} */}
                                    <TiStarOutline/>
								</div>
							</div>
						{/* )} */}

						{/* {loading && (
							<div className='mt-3 flex space-x-2'>
								<RectangleSkeleton />
								<CircleSkeleton />
								<RectangleSkeleton />
								<RectangleSkeleton />
								<CircleSkeleton />
							</div>
						)} */}

						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm'>
							{/* <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} /> */}
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dignissimos commodi accusamus qui iste dolorum itaque neque illo sunt perspiciatis, ad maxime corporis magnam vel repellendus velit facilis dolores quisquam?</p>
						</div>

						{/* Examples */}
						<div className='mt-4'>
							{/* {problem.examples.map((example, index) => ( */}
								<div>
									<p className='font-medium text-white '>Example 1 </p>
									{/* {example.img && <img src={example.img} alt='' className='mt-3' />} */}
									<div className='example-card'>
										<pre>
											<strong className='text-white'>Input: </strong> nums = [2,3,3,4], target = 9{" "}
											<br />
											<strong>Output:</strong>
											[0,1] <br />
											{/* {example.explanation && (
												<>
													<strong>Explanation:</strong> {example.explanation}
												</>
											)} */}
										</pre>
									</div>
								</div>
							{/* ))} */}
						</div>

						{/* Constraints */}
						{/* <div className='my-8 pb-4'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc '>
								<div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
							</ul>
						</div> */}
                        <div className='my-5'>
                            <div className='text-white text-sm font-medium'>Constraints:</div>
                            <ul className='text-white ml-5 list-disc'>
                                <li className='mt-2'>
                                    <code> 2 nums.length 10</code>
                                </li>
                                <li className='mt-2'>
                                    <code> 2 nums.length 10</code>
                                </li>
                                <li className='mt-2'>
                                    <code> 2 nums.length 10</code>
                                </li>
                                <li className='mt-2'>
                                    <strong>Only one valid answer exists.</strong>
                                </li>
                            </ul>
                        </div>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}
export default ProblemDescription;