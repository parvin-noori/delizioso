import _ from "lodash";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GrPrevious } from "react-icons/gr";

export default function PaginationSection({ activePage, setPage, pages }) {
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pages) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  return (
    <Pagination>
      <PaginationContent className=" gap-5">
        <PaginationItem>
          <PaginationPrevious
            className="bg-brown text-white rounded-xl cursor-pointer hover:bg-orange-100 hover:text-primaryOrange "
            onClick={prevPage}
          />
        </PaginationItem>

        {_.times(pages, (index) => (
          <PaginationItem
            className={`page-item ${index + 1 === activePage ? "active" : ""}`}
            onClick={() => setPage(index + 1)}
          >
            <PaginationLink
              className="bg-orange-100 text-primaryOrange rounded-xl border-opacity-0  cursor-pointer  hover:border-opacity-100 border-primaryOrange hover:text-primaryOrange hover:bg-transparent"
              isActive
              key={`pagination- ${index}`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className="bg-brown text-white rounded-xl cursor-pointer hover:bg-orange-100 hover:text-primaryOrange"
            onClick={nextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
