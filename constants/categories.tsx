import { ReactNode } from "react";

interface ICATEGORY {
  name: string;
  total_mentor: number;
  icon: ReactNode;
  id: number;
}

export const DEFAULT_CATEGORES_DATA: ICATEGORY[] = [
  {
    id: 1,
    name: "Graphic & Design",
    total_mentor: 423,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M12.0835 19.3334C12.0835 17.3276 12.0835 15.7084 15.7085 15.7084H20.5418C24.1668 15.7084 24.1668 14.5001 24.1668 12.0834V9.66675C24.1668 7.25008 24.1668 6.04175 20.5418 6.04175H19.3335"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 2.41675H9.6667C8.88128 4.773 8.88128 7.3105 9.6667 9.66675H14.5C15.2854 7.3105 15.2854 4.773 14.5 2.41675Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.66683 2.41675H8.4585C6.04183 2.41675 4.8335 3.62508 4.8335 6.04175C4.8335 8.45841 6.04183 9.66675 8.4585 9.66675H9.66683C8.4585 7.25008 8.4585 4.83341 9.66683 2.41675Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.7083 2.41675H14.5C15.7083 4.83341 15.7083 7.25008 14.5 9.66675H15.7083C18.125 9.66675 19.3333 8.45841 19.3333 6.04175C19.3333 3.62508 18.125 2.41675 15.7083 2.41675Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.479 26.5833H12.6873C14.4998 26.5833 14.4998 25.3749 14.4998 24.7708V21.1458C14.4998 20.5416 14.4998 19.3333 12.6873 19.3333H11.479C9.6665 19.3333 9.6665 20.5416 9.6665 21.1458V24.7708C9.6665 25.3749 9.6665 26.5833 11.479 26.5833Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Programming",
    total_mentor: 123,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M9.66667 12.0833L7.25 14.4999L9.66667 16.9166"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.3335 12.0833L21.7502 14.4999L19.3335 16.9166"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.4998 26.5834C21.1733 26.5834 26.5832 21.1735 26.5832 14.5001C26.5832 7.82664 21.1733 2.41675 14.4998 2.41675C7.8264 2.41675 2.4165 7.82664 2.4165 14.5001C2.4165 21.1735 7.8264 26.5834 14.4998 26.5834Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.7082 11.6846L13.2915 17.3154"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Business",
    total_mentor: 43,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M22.1367 14.5C25.2783 14.5 26.5833 13.2917 25.4233 9.32835C24.6379 6.65793 22.3421 4.3621 19.6717 3.57668C15.7083 2.41668 14.5 3.72168 14.5 6.86335V10.3433C14.5 13.2917 15.7083 14.5 18.125 14.5H22.1367Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.1667 17.7625C23.043 23.3571 17.678 27.4171 11.5759 26.4263C6.99631 25.6892 3.31089 22.0038 2.56172 17.4242C1.58297 11.3463 5.61881 5.98129 11.1892 4.84546"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Marketing",
    total_mentor: 423,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M19.9375 11.4792L14.8625 16.5542L12.9292 13.6542L9.0625 17.5209"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.521 11.4792H19.9377V13.8959"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8748 26.5834H18.1248C24.1665 26.5834 26.5832 24.1667 26.5832 18.1251V10.8751C26.5832 4.83341 24.1665 2.41675 18.1248 2.41675H10.8748C4.83317 2.41675 2.4165 4.83341 2.4165 10.8751V18.1251C2.4165 24.1667 4.83317 26.5834 10.8748 26.5834Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Life Style",
    total_mentor: 46,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M6.22314 2.41675V26.5834"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.22314 4.83325H19.7565C23.019 4.83325 23.744 6.64575 21.4481 8.94159L19.9981 10.3916C19.0315 11.3583 19.0315 12.9291 19.9981 13.7749L21.4481 15.2249C23.744 17.5208 22.8981 19.3333 19.7565 19.3333H6.22314"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Workout",
    total_mentor: 78,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M20.7593 21.75C23.6593 21.75 24.3843 20.1188 24.3843 18.125V10.875C24.3843 8.88125 23.6593 7.25 20.7593 7.25C17.8593 7.25 17.1343 8.88125 17.1343 10.875V18.125C17.1343 20.1188 17.8593 21.75 20.7593 21.75Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.24072 21.75C5.34072 21.75 4.61572 20.1188 4.61572 18.125V10.875C4.61572 8.88125 5.34072 7.25 8.24072 7.25C11.1407 7.25 11.8657 8.88125 11.8657 10.875V18.125C11.8657 20.1188 11.1407 21.75 8.24072 21.75Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8657 14.5H17.1341"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.1875 17.5209V11.4792"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.8125 17.5209V11.4792"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Social Media",
    total_mentor: 12,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M10.8748 26.5834H18.1248C24.1665 26.5834 26.5832 24.1667 26.5832 18.1251V10.8751C26.5832 4.83341 24.1665 2.41675 18.1248 2.41675H10.8748C4.83317 2.41675 2.4165 4.83341 2.4165 10.8751V18.1251C2.4165 24.1667 4.83317 26.5834 10.8748 26.5834Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5002 18.7291C16.8359 18.7291 18.7293 16.8356 18.7293 14.4999C18.7293 12.1642 16.8359 10.2708 14.5002 10.2708C12.1645 10.2708 10.271 12.1642 10.271 14.4999C10.271 16.8356 12.1645 18.7291 14.5002 18.7291Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3101 8.45841H21.3241"
          stroke="#46B312"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Workout",
    total_mentor: 78,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          d="M7.7815 2.41675H21.2061C25.5078 2.41675 26.5832 3.49216 26.5832 7.78175V15.4305C26.5832 19.7322 25.5078 20.7955 21.2182 20.7955H7.7815C3.49192 20.8076 2.4165 19.7322 2.4165 15.4426V7.78175C2.4165 3.49216 3.49192 2.41675 7.7815 2.41675Z"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 20.8076V26.5835"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.4165 15.7083H26.5832"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.0625 26.5833H19.9375"
          stroke="#46B312"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
