import React, { useEffect, useState } from 'react';
import "../styles/InteriorParts.css";

function InteriorParts() {
    const [parts, setParts] = useState([
        // Add your parts here
        { id: "#08545-00931", name: 'Scion Navigation System, Audio/RSE', price: 'MSRP $2,000.00' },
        { id: "PT725-08121-AA", name: 'Navigation Headunit', price: 'MSRP $2,060.71 ' },
        // ... Add all 40 parts
    ]);

    useEffect(() => {
        const loadImages = async () => {
            const partsWithImages = await Promise.all(parts.map(async (part) => {
                const imageModule = await import(`../assets/${part.name.replace(/[^a-zA-Z0-9]/g, '')}.png`);
                return { ...part, imageUrl: imageModule.default };
            }));
            setParts(partsWithImages);
        };
        loadImages();
    }, []);

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(parts.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = parts.slice(startIndex, endIndex);

    return (
        <div className="interior-parts">
            <div className="parts-grid">
                {currentItems.map(part => (
                    <div key={part.id} className="part-item">
                        <img src={part.imageUrl} alt={part.name} />
                        <h3>{part.name}</h3>
                        <p>{part.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages).keys()].map(pageNumber => (
                    <button
                        key={pageNumber + 1}
                        onClick={() => setCurrentPage(pageNumber + 1)}
                        className={currentPage === pageNumber + 1 ? 'active' : ''}
                    >
                        {pageNumber + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default InteriorParts;
