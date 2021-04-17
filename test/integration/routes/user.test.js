describe('Login User', () => {
  describe('Login user /users/login', () => {
    it('Get user object with valid login param', (done) => {
      request
        .post('/users/login')
        .send({
          email: 'u1@luckyshine.xyz',
          password: 'luckyshine001',
        })
        .end((err, res) => {
          expect(res.body.id).to.be.eq(3000);
          done(err);
        });
    });

    it('Should login failed with wrong email', (done) => {
      request
        .post('/users/login')
        .send({
          email: 'wrong@gmail.com',
          password: 'luckyshine001',
        })
        .end((err, res) => {
          expect(Object.keys(res.body)).to.have.lengthOf(0);
          done(err);
        });
    });

    it('Should show error for missing params', (done) => {
      request
        .post('/users/login')
        .send({})
        .end((err, res) => {
          expect(res.body.errors.length).to.be.eq(2);
          done(err);
        });
    });

    it('Should show error for password', (done) => {
      request
        .post('/users/login')
        .send({
          email: 'test@gamil.com',
        })
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.be.eq('Password is required');
          expect(res.body.errors.length).to.be.eq(1);
          done(err);
        });
    });

    it('Should show error for email', (done) => {
      request
        .post('/users/login')
        .send({
          password: '123456',
        })
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.be.eq('Email is required');
          expect(res.body.errors.length).to.be.eq(1);
          done(err);
        });
    });
  });
});
