export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId?.toString() || data.id;
  }

  get Template() {
    return ` 
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${this.albumArt}" class="img-fluid rounded-start" alt="${this.album}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">${this.artist}</p>
              <p class="card-text"><small class="text-muted">$${this.price} - ${this.id}</small></p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
