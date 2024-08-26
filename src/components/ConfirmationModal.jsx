import React from 'react';
import '../styles/ConfirmationModal.css'; // Estilos opcionales para el modal

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>¿Deseas confirmar la compra?</h2>
                <div className="modal-buttons">
                    <button onClick={onConfirm}>Sí</button>
                    <button onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;