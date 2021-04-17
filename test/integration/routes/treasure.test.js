describe('Find Treasure Box', () => {
  describe('Get treasures /treasures', () => {
    it('treasure with all valid params', (done) => {
      request
        .get('/treasures?distance=1&priceValue=$15,$30&latitude=1.3273451&longitude=103.8756757')
        .end((err, res) => {
          expect(res.body.length).to.be.satisfy((n) => n > 0);
          done(err);
        });
    });

    it('Get treasures with missing optional param priceValue', (done) => {
      request
        .get('/treasures?distance=1&latitude=1.3273451&longitude=103.8756757')
        .end((err, res) => {
          expect(res.body.length).to.be.satisfy((n) => n > 0);
          done(err);
        });
    });

    it('Should show error for invalid price value range', (done) => {
      request
        .get('/treasures?distance=1&priceValue=$8,$30&latitude=1.3273451&longitude=103.8756757')
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.be.eq('Price value must be valid e,g:- $10, $20, $30');
          expect(res.body.errors.length).to.be.eq(1);
          done(err);
        });
    });

    it('Should show error for invalid distance param', (done) => {
      request
        .get('/treasures?distance=2&latitude=1.3273451&longitude=103.8756757')
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.be.eq('Distance must be 1 or 10 km');
          expect(res.body.errors.length).to.be.eq(1);
          done(err);
        });
    });

    it('Should show error for missing distance param', (done) => {
      request
        .get('/treasures?latitude=1.3273451&longitude=103.8756757')
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.be.eq('Distance must be 1 or 10 km');
          expect(res.body.errors.length).to.be.eq(1);
          done(err);
        });
    });

    it('Should show error for missing latitude param ', (done) => {
      request
        .get('/treasures?distance=1&&longitude=103.8756757')
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.be.eq('Latitude is required');
          expect(res.body.errors.length).to.be.eq(1);
          done(err);
        });
    });

    it('Should show error for missing longitude param ', (done) => {
      request
        .get('/treasures?distance=1&latitude=1.3273451')
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.be.eq('Longitude is required');
          expect(res.body.errors.length).to.be.eq(1);
          done(err);
        });
    });
  });
});
