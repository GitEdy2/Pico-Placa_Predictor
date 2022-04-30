const { hasUncaughtExceptionCaptureCallback } = require('process')
const { infoSubmited } = require('../resources/index')

test('Permission for plate PCQ-8214 to drive in Tuesday at 16:30', () => { 
    const result = infoSubmited(false, 'No puede circular')

    expect(result).toBe(false,'No puede circular')
});