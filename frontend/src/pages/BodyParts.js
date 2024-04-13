import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { bodyPartsData } from '../components/partsData';
import "../styles/BodyParts.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function BodyParts({ filtersOnly, batteriesOnly, headlightsOnly, sparkPlugsOnly, alternatorsOnly }) {
    const [parts, setParts] = useState(bodyPartsData);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPriceRange, setSelectedPriceRange] = useState('All');
    const [sortType, setSortType] = useState('default');
    const location = useLocation(); // Move useLocation inside the component

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

    const sortedAndFilteredParts = parts
        .filter(part => (filtersOnly && part.category === 'Filters') || (alternatorsOnly && part.category === 'Alternators') || (batteriesOnly && part.category === 'Batteries') || (headlightsOnly && part.category === 'Headlight Bulbs') || (sparkPlugsOnly && part.category === 'Spark Plugs') || (!filtersOnly && !batteriesOnly && !headlightsOnly && !sparkPlugsOnly && !alternatorsOnly))
        .filter(part => {
            const price = parseFloat(part.price.replace(/[^\d.]/g, ''));
            switch (selectedPriceRange) {
                case '$0 - $100':
                    return price <= 100;
                case '$100 - $500':
                    return price > 100 && price <= 500;
                case '$500 - $1000':
                    return price > 500 && price <= 1000;
                case '$1000 - $1500':
                    return price > 1000 && price <= 1500;
                case '$1500 - $2000':
                    return price > 1500 && price <= 2000;
                default:
                    return true;
            }
        })
        .filter(part => selectedCategory === 'All' || part.category === selectedCategory)
        .sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
            const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
            switch (sortType) {
                case 'priceAsc':
                    return priceA - priceB;
                case 'priceDesc':
                    return priceB - priceA;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

    const currentItems = sortedAndFilteredParts.slice(startIndex, endIndex);

    return (
        <div className="body-parts">
            <h1 className="body-parts-title">
                {filtersOnly ? 'Filters' : (batteriesOnly ? 'Batteries' : (headlightsOnly ? 'Headlight Bulbs' : (alternatorsOnly ? 'Alternators' : (sparkPlugsOnly ? 'Spark Plugs' : 'Body Parts'))))}
            </h1>
            {location.pathname !== '/body-parts/batteries' || 'body-parts/alternators' || 'body-parts/filters' ||'body-parts/Headlight-bulbs'||'body-parts/spark-plugs' && ( // Conditionally render the category filter
                <div className="filters-container">
                    <div className="category-filter">
                        <select onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="All">All Categories</option>
                            <option value="Alternators">Alternators</option>
                            <option value="Batteries">Batteries</option>
                            <option value="Filters">Filters</option>
                            <option value="Headlight Bulbs">Headlight Bulbs</option>
                            <option value="Radiators">Radiators</option>
                            <option value="Spark Plugs">Spark Plugs</option>
                            <option value="Windshield Wipers">Windshield Wipers</option>
                        </select>
                    </div>
                    <div className="price-filter">
                        <select onChange={(e) => setSelectedPriceRange(e.target.value)}>
                            <option value="All">All Prices</option>
                            <option value="$0 - $100">$0 - $100</option>
                            <option value="$100 - $500">$100 - $500</option>
                            <option value="$500 - $1000">$500 - $1000</option>
                            <option value="$1000 - $1500">$1000 - $1500</option>
                            <option value="$1500 - $2000">$1500 - $2000</option>
                        </select>
                    </div>
                    <div className="sort-filter">
                        <select onChange={(e) => setSortType(e.target.value)}>
                            <option value="default">Sort By</option>
                            <option value="priceAsc">Price: Low to High</option>
                            <option value="priceDesc">Price: High to Low</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
            )}
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
            <footer className="ContactFooter">
                <div className="ContactInfo">
                    <h2>Contact Information</h2>
                    <p>EZAUTOPARTS</p>
                    <p>================</p>
                    <p>650 Engineering Drive</p>
                    <p>Peachtree Corners, GA 30092</p>
                    <p>================</p>
                    <p>800-829-3900</p>
                    <p>Email: <a href="mailto:miloviveros@yahoo.com">miloviveros@yahoo.com</a></p>
                </div>
                <div className="SocialMedia">
                    <h2>Connect with Us</h2>
                    <a href="https://www.facebook.com"><FacebookIcon /></a>
                    <a href="https://www.twitter.com"><TwitterIcon /></a>
                    <a href="https://www.instagram.com"><InstagramIcon /></a>
                </div>
                <div className="BusinessHours">
                    <h2>Business Hours</h2>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                </div>
            </footer>
        </div>
    );
}

export default BodyParts;
