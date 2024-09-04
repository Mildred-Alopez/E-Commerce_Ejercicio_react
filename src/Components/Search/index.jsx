

function Search() {
    return (
        <div
            className="cursor-pointer ms-96 mt-20 overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 h-44 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-orange-500"
        >
            <svg
                className="stroke-orange-500 shrink-0"
                height="50"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="50"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
            >
                <path
                    d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                ></path>
            </svg>
            <div>
                <span className="font-bold">WE DON'T HAVE ANYTHING</span>
            </div>
        </div>
    )
}

export default Search