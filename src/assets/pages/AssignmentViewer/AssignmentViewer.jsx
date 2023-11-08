import  { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLoaderData } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const AssignmentViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const {pdfLink} = useLoaderData();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">PDF Preview</h1>
      </header>
      <div className="flex-1 p-4">
        <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={window.innerWidth * 0.9} />
        </Document>
      </div>
      <div className="text-center p-4">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md m-2"
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md m-2"
          onClick={() => handlePageChange(pageNumber + 1)}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AssignmentViewer;
