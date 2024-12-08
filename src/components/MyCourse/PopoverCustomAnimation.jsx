import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export function PopoverCustomAnimation() {
  return (
    <Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <PopoverHandler>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"
            />
          </svg>
        </button>
      </PopoverHandler>
      <PopoverContent>
        <p className="p-2 hover:bg-orange-700 hover:text-white ">View Details</p>
        <p className="p-2 hover:bg-orange-700 hover:text-white mt-1 mb-1">Edit Content</p>
        <p className="p-2 hover:bg-orange-700 hover:text-white">Delete Course</p>
      </PopoverContent>
    </Popover>
  ); 
} 
