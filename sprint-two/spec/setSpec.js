describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should accept all data types', function() {
    set.add('string');
    set.add(2);
    set.add(true);
    set.add({'a': 1, name: 'bob'});
    set.add([]);
    set.add(null);
    set.add(undefined);
    set.add(NaN);

    expect(set.contains("string")).to.equal(true);
    expect(set.contains(2)).to.equal(true);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains({'a': 1, 'name': 'bob'})).to.equal(true);
    expect(set.contains([])).to.equal(true);
    expect(set.contains(null)).to.equal(true);
    expect(set.contains(NaN)).to.equal(true);
    expect(set.contains(undefined)).to.equal(true);
    expect(set.contains(5)).to.equal(false);
  });

});
