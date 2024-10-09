import _ from "lodash";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationSection({ activePage, setPage, pages }) {
  const prevPage = () => {
    menuRef.current && menuRef.current.scrollIntoView({ behavior: "smooth" });
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    menuRef.current && menuRef.current.scrollIntoView({ behavior: "smooth" });
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
      <PaginationContent className="gap-5">
        <PaginationItem>
          <PaginationPrevious
            className={`bg-brown text-white rounded-xl cursor-pointer hover:bg-orange-100 hover:text-primaryOrange ${
              activePage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={prevPage}
            disabled={activePage === 1}
          />
        </PaginationItem>

        {_.times(pages, (index) => (
          <PaginationItem
            className={`page-item ${index + 1 === activePage ? "active" : ""}`}
            onClick={() => setPage(index + 1)}
            key={`pagination-${index}`}
          >
            <PaginationLink
              className={`${
                index + 1 === activePage
                  ? "bg-primaryOrange text-white "
                  : "bg-orange-100 text-primaryOrange"
              } rounded-xl border border-transparent cursor-pointer hover:border-primaryOrange hover:text-primaryOrange hover:bg-transparent`}
              isActive={index + 1 === activePage}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className={`bg-brown text-white rounded-xl cursor-pointer hover:bg-orange-100 hover:text-primaryOrange ${
              activePage === pages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={nextPage}
            disabled={activePage === pages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
