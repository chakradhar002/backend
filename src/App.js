import ContactForm from './ContactForm';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid text-white text-center myimage">
        <h1 className="display-4" style={{ color: 'black', fontWeight: 'bold' }}>Arya Law Contact Form</h1>
        <p className="lead" style={{ color: 'black', fontWeight: 'bold' }}>We are here to assist you with all your legal needs</p>
      </div>
      <div className="container mt-5">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;


