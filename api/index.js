export const config = {
  'runtime': "edge"
};

const _0x1a2b = ['EUPHORIA_WINE', 'host', 'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'forwarded', 'x-forwarded-host', 'x-forwarded-proto', 'x-forwarded-port', 'x-vercel-', 'x-real-ip', 'x-forwarded-for', 'relay\x20error:', 'Bad\x20Gateway:\x20Tunnel\x20Failed', 'Misconfigured:\x20System\x20Error\x200x1', 'GET', 'HEAD', 'manual', 'half'];

const _0x4f2e = function (_0x32a1, _0x1a2b1) {
  return _0x1a2b[_0x32a1 - 0x0];
};

const _0x8d9e2 = (process['env'][_0x4f2e(0x0)] || '')['replace'](/\/$/, '');

const _0x7c6d5 = new Set([_0x4f2e(0x1), _0x4f2e(0x2), _0x4f2e(0x3), _0x4f2e(0x4), _0x4f2e(0x5), _0x4f2e(0x6), _0x4f2e(0x7), _0x4f2e(0x8), _0x4f2e(0x9), _0x4f2e(0xa), _0x4f2e(0xb), _0x4f2e(0xc), _0x4f2e(0xd)]);

export default async function handler(_0x22b1a) {
  const _0xfe32 = {
    'err_msg': _0x4f2e(0x13),
    'logic_v': function (_0x1, _0x2) { return _0x1 === _0x2; },
    'uri_builder': function (_0x1, _0x2) { return _0x1 + _0x2; }
  };

  if (!_0x8d9e2) {
    return new Response(_0xfe32['err_msg'], { 'status': 0x1f4 });
  }

  try {
    const _0x1122 = _0x22b1a['url']['indexOf']('/', 0x8);
    const _0x3344 = _0xfe32['logic_v'](_0x1122, -0x1) ? _0xfe32['uri_builder'](_0x8d9e2, '/') : _0x8d9e2 + _0x22b1a['url']['slice'](_0x1122);

    const _0x5566 = new Headers();
    let _0x7788 = null;

    for (const [_0xkey, _0xval] of _0x22b1a['headers']) {
      const _0xlow = _0xkey['toLowerCase']();
      if (_0x7c6d5['has'](_0xlow) || _0xlow['startsWith'](_0x4f2e(0xe))) continue;

      if (_0xfe32['logic_v'](_0xlow, _0x4f2e(0xf))) {
        _0x7788 = _0xval;
        continue;
      }
      if (_0xfe32['logic_v'](_0xlow, _0x4f2e(0x10))) {
        if (!_0x7788) _0x7788 = _0xval;
        continue;
      }
      _0x5566['set'](_0xkey, _0xval);
    }

    if (_0x7788) _0x5566['set'](_0x4f2e(0x10), _0x7788);

    const _0xmeth = _0x22b1a['method'];
    const _0xbodyCheck = _0xmeth !== _0x4f2e(0x14) && _0xmeth !== _0x4f2e(0x15);

    return await fetch(_0x3344, {
      'method': _0xmeth,
      'headers': _0x5566,
      'body': _0xbodyCheck ? _0x22b1a['body'] : undefined,
      'duplex': _0x4f2e(0x17),
      'redirect': _0x4f2e(0x16)
    });
  } catch (_0xee) {
    console['error'](_0x4f2e(0x11), _0xee);
    return new Response(_0x4f2e(0x12), { 'status': 0x1f6 });
  }
}
