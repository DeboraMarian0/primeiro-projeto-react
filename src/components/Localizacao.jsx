function Localizacao() {
    return (
        <div className="localizacao">
            <h2>Localização</h2>
            <p>A cidade está situada entre a Serra do Mar e a Baía da Babitonga, o que proporciona uma paisagem única que mistura o verde das montanhas com a proximidade do mar. Ela fica a aproximadamente 180 km da capital do estado, Florianópolis, e a apenas 130 km de Curitiba, a capital paranaense.</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114322.37877478641!2d-48.91953255!3d-26.3013898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0572e92c687%3A0x6b499e9007f3bb6d!2sJoinville%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr"
                max-width="100%"
                width="800"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Joinville"
            ></iframe>
        </div>
        
    );
}

export default Localizacao;