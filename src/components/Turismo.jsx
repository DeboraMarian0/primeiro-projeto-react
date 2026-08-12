import { Row, Col } from 'react-bootstrap';

function Turismo() {
  return (
    <div className="turismo">
      <h2>Atrações Turísticas</h2>

      <Row>
        <Col md={4} className="mb-4">
          <div className="turismo-item text-center p-3 border rounded shadow-sm bg-white">
            <h5>
              <strong>Mirante de Joinville</strong>
            </h5>
            <img
              src="https://www.voltologo.net/wp-content/uploads/2021/07/mirante-em-joinville.jpg"
              alt="Mirante de Joinville"
              className="img-fluid rounded mb-3"
            />
            <p>
              Oferece uma vista panorâmica da cidade e é um local popular para
              fotos.
            </p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="turismo-item text-center p-3 border rounded shadow-sm bg-white">
            <h5>
              <strong>Museu</strong>
            </h5>
            <img
              src="https://89fmjoinville.com/site/wp-content/uploads/2023/03/Museu-de-Joinville-350x220_c.webp"
              alt="Museu de Joinville"
              className="img-fluid rounded mb-3"
            />
            <p>
              O Museu Nacional de Imigração e Colonização conta a história da
              imigração em Joinville e exibe artefatos históricos.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <div className="turismo-item text-center p-3 border rounded shadow-sm bg-white">
            <h5>
              <strong>Parque Zoobotânico</strong>
            </h5>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d0/c7/be/parque.jpg?w=1300&h=-1&s=1"
              alt="Parque Zoobotânico"
              className="img-fluid rounded mb-3"
            />
            <p>
              Um espaço verde com uma variedade de animais e plantas, ideal para
              passeios em família.
            </p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="turismo-item text-center p-3 border rounded shadow-sm bg-white">
            <h5>
              <strong>Rua das Palmeiras</strong>
            </h5>
            <img
              src="https://www.joinville.sc.gov.br/wp-content/uploads/2022/09/palmeiras-1024x768.jpeg"
              alt="Rua das Palmeiras"
              className="img-fluid rounded mb-3"
            />
            <p>
              Uma rua charmosa repleta de palmeiras, perfeita para um passeio
              tranquilo.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Turismo;
