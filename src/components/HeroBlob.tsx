import PathTransfromer from "./PathTransformer";

export default function HeroBlob() {
  const pathsSmall = [
    "M157.786 22.808C173.675 35.9191 184.898 54.0303 192.009 73.9192C199.009 93.9192 202.12 115.586 196.231 134.586C190.231 153.475 175.453 169.808 158.009 181.252C140.564 192.697 120.564 199.364 100.786 198.919C81.1197 198.364 61.7864 190.697 44.7864 179.141C27.6753 167.586 13.0086 152.03 6.00863 133.252C-0.991367 114.586 -0.102481 92.6969 6.23085 72.4747C12.4531 52.1414 24.342 33.4747 41.0086 20.5858C57.5642 7.69692 79.0086 0.585812 100.12 1.14137C121.12 1.58581 141.898 9.69692 157.786 22.808Z",
    "M159.738 18.6955C176.404 29.6955 189.071 47.1399 194.293 66.251C199.627 85.4732 197.515 106.362 191.293 126.029C185.182 145.807 174.96 164.473 159.515 177.362C143.96 190.14 123.071 197.14 102.849 196.14C82.6266 195.251 63.071 186.473 45.5155 174.362C27.9599 162.14 12.2933 146.695 5.84883 127.918C-0.595612 109.251 2.07105 87.251 9.73772 67.8066C17.2933 48.4732 29.9599 31.5843 46.1822 20.3621C62.4044 9.25101 82.2933 3.69546 102.515 3.36213C122.627 2.91768 143.182 7.58435 159.738 18.6955Z",
    "M155.669 20.2859C171.225 32.0637 182.558 49.397 189.558 68.6193C196.669 87.8415 199.669 109.064 194.336 128.397C189.114 147.73 175.781 165.175 158.669 177.953C141.669 190.619 120.892 198.841 99.7806 199.508C78.5584 200.175 56.8917 193.397 40.8917 180.286C24.7806 167.175 14.4473 147.73 8.55837 127.397C2.78059 107.064 1.33614 85.7304 6.55836 65.7304C11.8917 45.7304 23.8917 27.0637 40.5584 15.7304C57.225 4.28592 78.7806 0.174815 99.4473 1.28593C120.114 2.28593 140.114 8.50815 155.669 20.2859Z",
    "M154.772 25.6666C170.994 38.2221 183.661 54.8888 191.327 74.2221C199.105 93.4443 201.883 115.444 195.327 134C188.772 152.444 172.772 167.444 155.216 178.333C137.55 189.111 118.327 195.778 98.8829 196C79.5496 196.222 59.8829 190.111 43.4385 178.889C27.1052 167.778 13.7718 151.444 6.77183 132.444C-0.228174 113.555 -0.894841 91.9999 5.66072 72.9999C12.1052 53.9999 25.8829 37.6666 42.6607 25.2221C59.5496 12.8888 79.3274 4.44434 99.1052 4.44434C118.883 4.44434 138.55 12.9999 154.772 25.6666Z",
    "M156.346 21.9175C171.901 33.2508 182.679 50.9175 190.124 70.3619C197.568 89.9175 201.568 111.362 196.124 130.251C190.679 149.14 175.901 165.473 158.346 177.362C140.901 189.362 120.79 196.806 100.901 196.473C81.0124 196.14 61.3458 188.029 44.3458 175.917C27.2347 163.917 12.6791 147.917 5.90133 129.029C-0.987562 110.14 -0.0986721 88.1397 6.34577 67.9175C12.6791 47.5842 24.568 28.9175 41.2347 17.9175C57.7902 6.91749 79.2347 3.69526 100.012 4.58415C120.79 5.47304 140.901 10.5842 156.346 21.9175Z",
  ];

  const pathsMedium = [
    "M186.179 48.742C202.248 79.225 197.638 119.118 179.33 145.095C161.022 171.072 128.884 183 96.8775 183C64.8712 183 32.7332 171.072 20.3521 148.541C7.83939 126.01 15.0836 92.8761 31.0209 62.3931C47.0899 31.7775 71.9837 3.68002 102.805 0.366645C133.494 -3.07927 170.242 18.1263 186.179 48.742Z",
    "M177.593 60.0842C196.422 89.0474 202.787 128.411 187.273 155.136C171.626 181.861 134.101 195.816 102.41 192.525C70.7192 189.234 44.73 168.564 26.564 140.26C8.2655 112.086 -2.20974 76.4089 10.7849 50.737C23.6469 25.0651 60.1113 9.53026 93.9238 11.1101C127.736 12.5582 158.897 31.121 177.593 60.0842Z",
    "M173.325 61.8734C189.189 86.6603 190.511 122.522 175.308 150.473C159.973 178.556 128.112 198.597 93.8724 199.915C59.5 201.365 22.8803 184.094 9.79234 157.329C-3.29559 130.697 7.41272 94.571 25.7887 68.4656C44.1647 42.3603 70.2083 26.4071 98.4994 25.0886C126.79 23.7702 157.329 37.2184 173.325 61.8734Z",
    "M178.7 53.096C191.714 78.225 183.169 113.538 165.818 141.048C148.467 168.425 122.44 188.132 96.6754 187.999C71.0427 187.867 45.5415 167.764 30.4247 141.577C15.4395 115.39 10.5758 82.9863 23.3265 57.9895C36.0771 33.125 66.1791 15.4024 98.6471 14.0798C130.984 12.7572 165.686 27.9669 178.7 53.096Z",
    "M164.858 66.69C182.086 93.6468 190.634 128.099 177.878 152.557C165.121 176.884 130.798 191.217 100.946 188.719C71.0942 186.089 45.5819 166.891 27.3025 139.276C8.89155 111.662 -2.28651 75.7632 10.4696 51.3048C23.2258 26.9779 59.9161 14.2227 91.0832 17.5102C122.25 20.6661 147.763 39.8646 164.858 66.69Z",
  ];

  return (
    <svg viewBox="0 0 200 200">
      <PathTransfromer
        duration={15}
        scale={0.95}
        translate={0}
        fill="var(--primary)"
        paths={pathsSmall}
      />
      <PathTransfromer
        duration={15}
        scale={1}
        fill="var(--secondary)"
        paths={pathsMedium}
      />
      <PathTransfromer
        duration={10}
        scale={0.8}
        translate={20}
        fill="var(--background)"
        paths={pathsSmall}
      />

      <g>
        <defs>
          <filter id={`me`}>
            <feImage href="/me.png" />
          </filter>
          <clipPath id={`clip-me`}>
            <PathTransfromer
              duration={10}
              scale={0.75}
              fill="none"
              paths={pathsSmall}
              translate={25}
            />
          </clipPath>
        </defs>
        <rect
          x={25}
          y={40}
          height={125}
          width={150}
          style={{ filter: `url(#me)` }}
          clipPath={`url(#clip-me)`}
        />
      </g>
    </svg>
  );
}
