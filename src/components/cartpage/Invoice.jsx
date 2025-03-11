import React, { useContext, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CartContext } from "./CartContext";
import "./invoice.css";

export function Invoice() {
    const invoiceRef = useRef();
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    const { cart, cart1, selectedOption } = useContext(CartContext);

    // 🔍 DEBUG: Check if cart has data
    useEffect(() => {
        // console.log("Cart Data in invoice:", cart);
    }, [cart]);

    // Calculate total amount with default values
    const totalAmount = cart?.reduce((total, item) => {
        const price = parseFloat(item?.price) || 0;
        const quantity = item?.quantity || 1;
        return total + price * quantity;
    }, 0) || 0;

    const normalSelectedOption = parseInt(selectedOption, 10);
    const selectedAddress = cart1?.find((item) => item.id === normalSelectedOption);
    

    const downloadInvoice = () => {
        const input = invoiceRef.current;

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
            pdf.save("invoice.pdf");
        });
    };

    return (
        <div>
            {/* Invoice Section */}
            <div ref={invoiceRef} className="invoice">
                {/* Header Section */}
                <div className="header">
                    <div className="mainContent">
                        <div className="BrandName">
                            <img src="/assets/logo.png" alt="Company Logo" style={{ maxWidth: "150px" }} />
                        </div>
                    </div>
                    <div className="secondaryContent">
                        <div className="shop-info">
                            <h4>CARA PRIVATE LIMITED</h4>
                            <p>Phone: +1234567890</p>
                            <p>Invoice #INV-001</p>
                            <p>{formattedDate}</p>
                        </div>
                        <div className="customer-details">
                            <h4>CUSTOMER DETAILS :</h4>
                            {selectedAddress ? (
                                <>
                                    <p>Name: {selectedAddress.name}</p>
                                    <p>Email: {selectedAddress.email || "N/A"}</p>
                                    <p>Phone: +91 {selectedAddress.phoneNO}</p>
                                </>
                            ) : (
                                <p style={{ color: "red" }}>No Address Selected</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Invoice Table */}
                <table className="itemized-list">
                    <thead>
                        <tr>
                            <th>SI NO</th>
                            <th>PRODUCT</th>
                            <th>QUANTITY</th>
                            <th>UNIT PRICE</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart && cart.length > 0 ? (
                            cart.map((item, index) => {
                                // console.log('cart items' , cart)
                                const productName = item?.name || "Unnamed Product";
                                const price = parseFloat(item?.price) || 0;
                                const quantity = item?.quantity || 1;
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{productName}</td>
                                        <td>{quantity}</td>
                                        <td>₹ {price.toFixed(2)}</td>
                                        <td>₹ {(price * quantity).toFixed(2)}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: "center", color: "red" }}>No Items in Cart</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Total Amount Section */}
                <div className="total">
                    <p>Price: {(totalAmount || 0).toFixed(2)}</p>
                    <p>Discount: {((totalAmount || 0) * 0.1).toFixed(2)}</p>
                    <p style={{ marginTop: "7px" }}>
                        <span>Total Amount: {(totalAmount - (totalAmount || 0) * 0.1).toFixed(2)}</span>
                    </p>
                </div>

                {/* Footer Section */}
                <div className="Thanks">
                    <div className="thanksText">Thank you for Choosing us</div>
                    <div className="com">www.carafashion.com</div>
                </div>
            </div>

            {/* Download Button */}
            <div style={styles.buttonContainer}>
                <button onClick={downloadInvoice} style={styles.button}>
                    Download Bill
                </button>
            </div>
        </div>
    );
}

// Simple Styling
const styles = {
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
    },
    button: {
        backgroundColor: "gray",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
        fontSize: "14px",
        marginTop: "20px",
        borderRadius: "5px",
    },
};

